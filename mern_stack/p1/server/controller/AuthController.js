const User = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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
        const token = jwt.sign({userId: user._id}, "codecinn",{
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

module.exports= {
    register,
}