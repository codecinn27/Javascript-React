const register = async (req,res) =>{
    const {email, password} = req.body;
    console.log("email is: ", email);
    console.log("password is: ", password);
};

module.exports= {
    register,
}