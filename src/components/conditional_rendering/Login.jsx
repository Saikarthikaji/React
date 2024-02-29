import React, {useState} from "react";

function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    let content;

    if(isLoggedIn) {
        content = <h1>welcome, you are logged in</h1>;
    } else {
        content = <h1>Please login to continue... </h1>;
    }

    return(
        <>
        {content};
        </>
    )
}

export default Login;