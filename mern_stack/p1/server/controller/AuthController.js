const {User} = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const checkAuthStatus = async (req,res) =>{
    var isAuthenticated;
    console.log("cookies: ", req.cookies.mern_engine);
    
    const token = req.cookies.mern_engine;
    if(!token){
        return res.json({isAuthenticated: false});
    }

    try{

        const decoded = jwt.verify(token, process.env.secret_key);
        const userId = decoded.userId;
        const user = await User.findById(userId);
        if(user){
            isAuthenticated = true;
            
        }
        return res.json({isAuthenticated, user});

    }catch(error){
        console.log("Error from AutStatus",error);
        return res.status(401).json({message: "User not logged in"});
    }
}

const register = async (req,res) =>{
    
    try{
        const {email, password} = req.body;
        const emailRegex = /^\S+@\S+\.\S+/;
        if(!emailRegex.test(email)){
            return res
            .status(400)
            .json({error: "Invalid_email", message: "Invalid Email"});
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if(!passwordRegex.test(password)){
            return res.status(400).json({
                error:"Invalid password", 
                message: "Password  must contain at least 8 characters, one uppercase, one lowercase, one number and one special character"
            });
        }

        const hashedPassword = await bcrypt.hash(password,10);
        const existingEmail = await User.findOne({email});
        if(existingEmail){
            return res.status(400).json({message: "User already exists"});
        }

        const user = new User({
            email,
            password: hashedPassword
        })
        await user.save();
        // const token = jwt.sign({userId: user._id}, process.env.secret_key,{
        //     expiresIn : "7d",
        // });
        const token = jwt.sign({userId: user._id}, process.env.secret_key,{
            expiresIn : "7d",
        });

        res.cookie("mern_engine", token,{
            httpOnly: true,
            maxAge: 7*24*60*60*1000,  //7days * 24 hours* 60mins*60seconds*1000miliseconds
        });
        console.log("token: ",token);
        res.status(200).json({message:"Registration Successful!", token:token});
        
    }catch(error){
        return res.status(500).json({ error: "Failed to register user" });
    }
    // console.log(req.body);
    
    // console.log("email is: ", email);
    // console.log("password is: ", password);
};

const signin = async (req,res) =>{
    
    try{
        const {email, password} = req.body;
        const emailRegex = /^\S+@\S+\.\S+/;
        if(!emailRegex.test(email)){
            return res
            .status(400)
            .json({error: "Invalid_email", message: "Invalid Email line65"});
        }

        const user = await User.findOne({email});
        console.log("existingEmail: ", user);
        
        if(!user){
            return res.status(400).json({message: "User not found"});
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid){
            return res.status(400).json({error: "Invalid password", message: "Invalid password"});
        }

        const token = jwt.sign({userId: user._id}, process.env.secret_key ,{
            expiresIn : "7d",
        });

        res.cookie("mern_engine", token,{
            httpOnly: true,
            maxAge: 7*24*60*60*1000,  //7days * 24 hours* 60mins*60seconds*1000miliseconds
        });
        console.log("token: ",token);
        res.status(200).json({message:"Sign In Successful!", token:token});
        
    }catch(error){
        return res.status(500).json({ error: "Failed to sign in user" });
    }
};

module.exports= {
    register, signin, checkAuthStatus
}