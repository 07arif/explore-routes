import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Post.css'

const Post = ({post}) => {
    const {id,title,body} =post;
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/post/${id}`)
    }

    return (
        <div className='post'>
            <p>Title: {title}</p>
            <p><small>{body}</small></p>
            <button onClick={handleNavigate}>Show Details</button>
        </div>
    );
};

export default Post;