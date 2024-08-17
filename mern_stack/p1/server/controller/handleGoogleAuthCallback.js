const {User} = require("../model/User");
const jwt = require("jsonwebtoken");

const handleGoogleAuthCallback = async(req, res,next) =>{

    try{
        const { email, id: googleId, displayName,  image} = req.user;
        console.log("User data From Google OAuth: ", req.user);
        
        let user = await User.findOne({ email});
        if (!user) {
          user = await User({
                email,
                googleId,
                displayName,
                image,
          });
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


/**
 The function of handleGoogleAuthCallback: 
Extract Authorization Code/Token: The function extracts the authorization code or token from the query parameters.
 Exchange Code for Tokens
 Retrieve User Data
 Authenticate/Authorize User: The function handles user login or registration based on the retrieved user data and tokens.
 Redirect User: The function usually redirects the user to a protected area of your application or shows a success message.
 */