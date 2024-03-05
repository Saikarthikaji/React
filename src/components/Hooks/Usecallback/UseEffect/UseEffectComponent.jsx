import React, {useState, useEffect} from "react";
import './index.css';


function UseEffectComponent() {
    console.log("component rendering...")

    const [users, setUsers] = useState('');

    useEffect(()=> {
        console.log("Reached here...")
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((users)=> {
            console.log("users : ", users)
            return users.json();
        })
        .then((users)=> {
            console.log("users parsed :", users);
            setUsers(users);
        })
        // .catch((error)=> {
        //     console.log("Error during data fetch : ", error);
        // })
    },  []);

    console.log("user from state :", users)



    return (
        <>
        
            {
                
                users ? (
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user)=> {
                                    return (
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.phone}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
            ) : (
                <h1>Loading</h1>
            )
            }
        </>
    )

}

export default UseEffectComponent;