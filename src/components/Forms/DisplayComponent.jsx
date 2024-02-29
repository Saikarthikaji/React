import React from "react";

function DisplayComponent({displayData}) {
    console.log("Display component re-rendering...");

    return (
    <>
    <h1>Nmae : {displayData}</h1>
    <h1>Email : {displayData}</h1>
    </>
    )
}

export default DisplayComponent