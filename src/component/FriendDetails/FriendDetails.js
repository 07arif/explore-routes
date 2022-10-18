import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
  const friend = useLoaderData();
  console.log(friend)
const {name,username,email,website,phone}= friend;
    return (
        <div>
          <h2>Username {username}</h2> 
          <p>Name: {name}</p> 
          <p>Email: {email}</p>
          <p>website: {website}</p>
         
          <p>hone: {phone}</p>
        </div>
    );
};

export default FriendDetails;