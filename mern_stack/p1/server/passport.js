const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { User } = require("./model/User");
const dotenv = require("dotenv");
dotenv.config({path: "./config.env"});

passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: "http://localhost:5000/api/auth/google/callback",
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
      
            let user = await User.findOne({ googleId: profile.id });
  
          if (!user) {
            // Create a new user if not found
            user = new User({
                googleId: profile.id,
                displayName: profile.displayName,
                image: profile.photos[0].value,
                email: profile.emails[0].value,

            });
            
            await user.save();
          }
  
          return done(null, user);
        } catch (err) {
          console.error(err);
          return done(err, false);
        }
      }
    )
  );
  

                /*
                const newUser = {
                    googleId: profile.id,
                    displayName: profile.displayName,
                    firstName: profile.name.givenName,
                    lastName: profile.name.familyName,
                    image: profile.photos[0].value,
                    email: profile.emails[0].value,
                };
                **/

                