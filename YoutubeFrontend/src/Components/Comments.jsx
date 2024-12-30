import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';



const Comments = () => {
    const { id } = useParams();
    const [Token, setToken] = useState(localStorage.getItem('token'));
    const [comments, setComments] = useState([]);
    const [messageComment, setmessageComment] = useState('');

    
    const handlecomment = async (e) => {
        e.preventDefault();

        try {
            const url = 'http://localhost:3000/addcomment';
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": 'application/json',
                    "Authorization": Token
                },
                body: JSON.stringify({ id, messageComment })
            });

            if (response.ok) {
                handleGetComments();
                console.log("Comment added successfully");
            } else {
                console.log("Failed to add comment: ", response.statusText);
            }
        } catch (err) {
            console.log("Error adding comment: ", err);
        }
    };


      // Function to fetch comments for the video
        const handleGetComments = async () => {
            try {
                const url = `http://localhost:3000/getcomments/${id}`;
                const response = await fetch(url, {
                    method: "GET",
                    headers: {
                        "Authorization": Token
                    }
                });
    
                if (response.ok) {
                    const result = await response.json();
                    setComments(result.videoComment);
                    console.log("Fetched comments: ", result.videoComment);
                } else {
                    console.log("Failed to fetch comments: ", response.statusText);
                }
            } catch (err) {
                console.log("Error fetching comments: ", err);
            }
        };
    
        // Fetch comments on component mount and when id or Token changes
        useEffect(() => {
            handleGetComments();
        }, [id, Token]);
    

    return (
        <>
                <div className="mx-20 flex mt-2 input-text bg-[#292929]">
                                <form className='w-full flex' onSubmit={handlecomment}>
                                    <input onChange={(e) => setmessageComment(e.target.value)} className='mt-2 w-[90%] outline-none py-3 rounded-lg bg-transparent border m border-gray-600' type="text" required placeholder='add comment' />
                                    <button type='submit' className='ml-5 border rounded-lg bg-red-500 text-white px-5 mt-2 hover:bg-green-500'>Comment</button>
                                </form>
                 </div>


                 <div>
                                 {comments.map((comment, index) => (
                                        <div key={index}>
                                            <p>{comment.messageComment}</p>
                                        </div>
                                    ))}
                 </div>
        </>
    )
}

export default Comments
