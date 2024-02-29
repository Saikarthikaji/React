import React, {useState} from "react";

function Login1() {
    const [isLoggedIn, setIsLoggesIn] = useState(true);

    return(
        <>
        {isLoggedIn ? (<h1>welcome, You are logged in </h1>) : (<h1>Please Log in to continue</h1>)}
        </>
    )
}

export default Login1;