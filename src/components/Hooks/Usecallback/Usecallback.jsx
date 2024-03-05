import React,{useCallback, useState} from "react";

function useCallbackComponent() {
    console.log("Parent re-rendering...")
    const [count, setCount] = useState(0);
    const [data, setData] = useState('');


    const handleClick = useCallback(()=> {
        setCount(count + 1);
        // seetCount(prevCount => prevCount +1);
    },[count]);

    return(

        <>
        <h1>Count : {count}</h1>
        <ChildComponent onclick = {handleClick} />
        </>
    )
}

function ChildComponent({onclick}) {
    console.log("child re-rendering...")
    return <button onclick={onclick} >Increment</button>
}

export default useCallbackComponent