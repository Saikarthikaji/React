import React, {userState} from "react";

function FormComponent({onsubmit}) {
    console.log("Form component re-renderimg...")

    const [inputData, setInputData] = userState({
        name :'',
        email : '',
    });

    const handleInputChange = (e)=> {
        e.preventDefault();

        if(e.target.name === "name") {
            setInputData({
                ...inputData,
                name : e.target.value,
            });
        }

        if(e.target.name === "email") {
            setInputData({
                ...inputData,
                email : e.target.value,
            });
        }


    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onsubmit(inputData);

    }

    return(
        <>
        <form onSubmit={handleSubmit} >
            <input type="text" name = "name" placeholder="Enter your name" onChange={handleInputChange} />
            <input type="text" name = "email" placeholder="Enter your email" onChange={handleInputChange} />
        </form>
        </>
    )
}

export default FormComponent