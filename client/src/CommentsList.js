import React, {useState, useEffect} from "react";
import axios from "axios";

export default ({postId}) => {

    const [comments, setComments] = useState([]);

    const fetchData = async () => {
        await axios.get(`http://localhost:4001/posts/${postId}/comments`).then(res => {
            setComments(res.data || []);
        }).catch(err => {
            setComments([]);
        });
    }

    useEffect(() => {
        fetchData();
    }, []);

    const renderedComments = comments.map(comment => {
        return <li key={comment.id}>{comment.content}</li>
    })

    return <ul>
        {renderedComments}
    </ul>
}