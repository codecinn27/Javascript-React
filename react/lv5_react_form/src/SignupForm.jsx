import { useState } from "react";

function SignupForm(){
    const [firstname, setFirstname] = useState("");
    const updateFirstname = (evt) =>{
        //console.log(evt.target.value);];
        setFirstname(evt.target.value);
    }

    const [lastname, setLastname] = useState("");
    const updateLastname = (evt) =>{
        setLastname(evt.target.value);
    }
    return(
        <div>
            <label htmlFor="firstname">First Name</label>
            <input type="text" placeholder="first name" value={firstname} onChange={updateFirstname} id="firstname"/>
            <label htmlFor="lastname">Last Name</label>
            <input type="text" placeholder="last name" value={lastname} onChange={updateLastname} id="lastname"/>
            <button>Submit</button>
        </div>
    )
}

export default SignupForm;