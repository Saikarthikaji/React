import React, {userState} from "react";


function ControlledComponent() {

    const [name, setName] = userState('');

    const handleChange = (e) => {

        console.log("value : ", e.target.value);
 
        setName(e.target.value);

    }

    const handleButtonclick = () => {
        alert(`Name is : ${name}`)
    }

    return(
        <>
        
        <input type="text" placeholder="Enter Your Name" onChange={handleChange} />
        <button onClick={handleButtonclick}>Get Input Value</button>
        
        </>
    )
}

export default ControlledComponent