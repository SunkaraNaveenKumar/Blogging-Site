import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
const PostsList=(props)=>{
    const[posts,setPosts]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((Response)=>{
            setPosts(Response.data)
       })
       .catch((err)=>[
           alert(err.message)
       ])
    },[])
   
    return(
        <div>
            {posts.length>0 ?(
                <>
                 <h1>Total Posts-{posts.length}</h1>
                 <ul>
                {posts.map(ele=>{
                    return <li key={ele.userId}><Link to={`/Posts/${ele.id}`}>{ele.title}</Link></li>
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

export default PostsList