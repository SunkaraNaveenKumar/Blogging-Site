import React,{useState,useEffect} from "react";
import { Link,Route } from "react-router-dom";
import axios from 'axios'
const UsersList=(props)=>{
    const [usersList,setUsersList]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((Response)=>{
            setUsersList(Response.data)
        })
        .catch((err)=>{
            alert(err.message)
        })
    },[])
    return(
        <div>
            {usersList.length>0 ?(
                <>
                <h2>Listing Users-{usersList.length}</h2>
                <ul>
                {usersList.map(ele=>{
                    return <li key={ele.id}><Link to={`/Users/${ele.id}`}> {ele.name}</Link></li>
                })}
                </ul>
                </>
            ):(
                <>
                <p>Loading...</p>
                </>
            )}
        </div>
    )
}

export default UsersList