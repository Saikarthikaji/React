import { useRef } from "react";

function UncontrolledComponent() {
    let inputRef =useRef();

    const handleClick = () => {
        alert(`name is : ${inputRef.current.value}`)
    }

    return (
        <>
        <input type="text" placeholder="Enter Your Name" value={inputRef}/>
        <button onClick={handleClick}>Get Input Value</button>
        </>
    )
}

export default UncontrolledComponent;