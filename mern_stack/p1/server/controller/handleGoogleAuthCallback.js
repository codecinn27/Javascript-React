const {User} = require("../model/User");
const jwt = require("jsonwebtoken");

const handleGoogleAuthCallback = async(req, res,next) =>{

    try{
         const { email, googleId } = req.user;
        console.log("User data From Google OAuth: ", req.user);
        let user = await User.findOne({ email: email});
        if (!user) {
          user = new User({email,googleId});
          await user.save();
        }else{
            console.log("User already exists");
        }
        const token = jwt.sign({userId: user._id}, process.env.secret_key,{
            expiresIn : "7d",
        });

        res.cookie("mern_engine", token,{
            httpOnly: true,
            maxAge: 7*24*60*60*1000,  //7days * 24 hours* 60mins*60seconds*1000miliseconds
        });
        res.redirect("http://localhost:3000/");

    }catch(error){
        console.log(error);
        res.status(500).json({message: "Failed to register user with Google OAuth", error: error.message}); 
    }

}

module.exports = {
    handleGoogleAuthCallback
};


/*
        const { email, id: googleId, displayName, name, photos } = req.user;
        console.log("User data From Google OAuth: ", req.user);
        const firstName = name.givenName;
        const lastName = name.familyName;
        const image = photos[0].value;
        
        let user = await User.findOne({ email});
        if (!user) {
          user = await User({
                email,
                googleId,
                firstName,
                lastName,
                displayName,
                image,
          });
**/