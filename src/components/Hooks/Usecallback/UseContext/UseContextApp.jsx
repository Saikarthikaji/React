import React,{createContext, useContext} from "react";

//Create a context with a default value
const MyContext = createContext('default');

function ComponentA() {
    const contextValue = useContext(MyContext);

    return <diiv>Component A : {contextValue}</diiv>


}

function ComponentB() {

    const contextValue = useContext(MyContext);

    return <div>Component B : {contextValue}</div>

}

function useContextApp() {
    //Provide the context value to the tree
    return(
        <MyContext.Provider value="Hello from Context">
         <ComponentA/>
         <ComponentB/>
         </MyContext.Provider>
    )
}

export default UseContextApp;