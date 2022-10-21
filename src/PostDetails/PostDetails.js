import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    const {id,title,body,userId} =post;
    // console.log(post)
    const navigate = useNavigate();
    const handleNavigate = () =>{
            navigate(`/friend/${userId}`)
    }
    return (
        <div>
          <h3>Details About Post{id}</h3>
            <p>Title: {title}</p>
            <p><small>{body}</small></p>
            <button onClick={handleNavigate}>Get The Author</button>
        </div>
    );
};

export default PostDetails;