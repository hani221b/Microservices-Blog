import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CommentCreate from './CommentCreate';
import CommentsList from './CommentsList';

export default () => {
    const [posts, setPosts] = useState({});

    const fetchPosts = async () => {
        const res = await axios.get("http://localhost:4000/posts");

        setPosts(res.data);
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    const renderedPost = Object.values(posts).map(post => {
        return <div key={post.id} className="card" style={{width: '30', marginBottom: '20px'}}>
            <div className='card-body'>
                <h3>{post.title}</h3>
                <CommentCreate postId={post.id} />
                <hr />
                <CommentsList postId={post.id}  />
            </div>
        </div>
    });

    return <div className='d-flex flex-row flex-wrap justify-content-between'>
        {renderedPost}
    </div>
}