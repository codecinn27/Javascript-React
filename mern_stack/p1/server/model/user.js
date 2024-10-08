const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        googleId:{
            type:String,
            unique: true
        },
        email:{
            type:String,
            unique: true
        },
        password:{
            type:String,
        },
        name:{
            type:String,
        },
        image:{
            type:String
        },
        displayName:{
            type:String
        }
    },
    {
        timeseries: true,
    }
);

const User = mongoose.model('User',userSchema);

module.exports = {User} ;