import React from 'react';
import PostCreate from './PostCreate';
import PostsList from './PostsList';


export default () => {
    return <div className='container'> 
        <h1>Create Post</h1>
            <PostCreate />  
            <hr />
            <h1>Posts</h1>
            <PostsList />
    </div>;
}