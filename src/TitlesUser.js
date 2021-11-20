import React,{useState,useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TitlesUser=(props)=>{
    const {id}=props.match.params
    const [posts,setPosts]=useState([])
    const [name,setName]=useState({})
    useEffect(()=>{
        Promise.all([axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`),axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)])
        .then((values)=>{
          const [postsList,user]=values
          setPosts(postsList.data)
          setName(user.data)
        })
        .catch((err)=>{
            alert(err.message)
        })
    },[])
    return(
        <div>
            {posts.length>0 ?(
                <>
                 <h1>UserName-{name.name}</h1>
          <h2>Posts written by User-{posts.length}</h2>
          <ul>
              {posts.map(ele=>{
                  return <li key={ele.userId}><Link to={`/Posts/${ele.id}`} >{ele.title}</Link></li>
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
export default TitlesUser