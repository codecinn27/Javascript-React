import { useState } from "react";

function SignupFormV2(){
    const [formData, setFormData] = useState({firstname: "", lastname: "", password:""});

    const handleChange = (evt) =>{
        const changedField = evt.target.name;
        const newValue = evt.target.value;
        //console.log(changedField, newValue);
        setFormData(currData=>{
            currData[changedField] = newValue;
            return {...currData }
        })
    }

    const handleSubmit = () =>{
        console.log(formData);
    }

    return(
        <div>
            <label htmlFor="firstname">First Name</label>
            <input type="text" placeholder="first name" value={formData.firstname} onChange={handleChange} id="firstname" name="firstname"/>
            <label htmlFor="lastname">Last Name</label>
            <input type="text" placeholder="last name" value={formData.lastname} onChange={handleChange} id="lastname" name="lastname"/>
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="password" value={formData.password} onChange={handleChange} id="password" name="password"/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default SignupFormV2;