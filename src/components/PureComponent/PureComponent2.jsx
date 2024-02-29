import React from "react";

const PureComponent2 = React.memo(({message}) => {
    console.log("Component re-rendering...")
    return <h1>{message}</h1>
});

export default PureComponent2