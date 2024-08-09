const register = async (req,res) =>{
    const {email, password} = req.body;
    console.log(req.body);
    
    console.log("email is: ", email);
    console.log("password is: ", password);
    res.status(200).json({message: "Registered Successful"})
};

module.exports= {
    register,
}