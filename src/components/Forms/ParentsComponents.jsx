import React, {userState} from "react";
import FormComponent from "./FormComponent";
import DisplayComponent from "./DisplayComponent";

function ParentComponent() {
    console.log("Parent re-rendering...")

    const [dataDisplay, setDataToDisplay] = userState ('');

    const handleSubmit = (data) => {
        setDataToDisplay(data);

    }
    return(
        <>
        <FormComponent onsubmit={handleSubmit}/>
        <DisplayComponent displayData={dataDisplay} />
        </>
    )
}

export default ParentComponent;