import axios from "axios";
import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";

const CommentsList=(props)=>{
    const {id}=props.match.params
    const [comments,setComments]=useState([])
    const [userName,setUserName]=useState({})
    const [post,setPost]=useState({})
    useEffect(()=>{
       axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
       .then((Response)=>{
           setPost(Response.data)
       })
        .catch((err)=>{
            alert(err.message)
        })
    },[])
    useEffect(()=>{
        Promise.all([ axios.get(`https://jsonplaceholder.typicode.com/users/${post.userId}`),axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${post.userId}`)])
     .then((values)=>{
       const[user,comments]=values
       setUserName(user.data)
       setComments(comments.data)
     })
     .catch((err)=>{
       console.log(err.message)
    })
    },[post])
    return(
        <div>
            {
                comments.length>0  ? (
                    <>
            <h1>UserName- {userName.name}</h1>
            <h2>Title-{post.title}</h2>
            <h2>Body-{post.body}</h2>
            <hr />
            <h2>Comments</h2>
            <ul>
            {comments.map(ele=>{
                return <li key={ele.id}>{ele.body}</li>
            })}
            </ul>
            <hr />
           <Link to={`/Users/${userName.id}`}> <p>More posts of Author:{userName.name}</p></Link>
                    </>
                ):(
                    <>
            <p>Loading...</p>
                    </>
                )
            }
        </div>
    )
}

export default CommentsList