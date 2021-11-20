import React from "react";
import { Link,Route } from "react-router-dom";
import CommentsList from "./CommentsList";
import PostsList from "./PostsList";
import TitlesUser from "./TitlesUser";
import UsersList from "./UsersList";
const App=(props)=>{

    return(
        <div>
            <h1>Blogging</h1>
            <li><Link to="/Users">Users</Link></li>
            <li><Link to="/Posts">Posts</Link></li>

            <Route path="/Users"component={UsersList} exact={true}></Route>
            <Route path="/Posts" component={PostsList} exact={true}></Route>
            <Route path='/Users/:id'component={TitlesUser}></Route>
            <Route path="/Posts/:id"component={CommentsList}></Route>
        </div>
    )
}

export default App