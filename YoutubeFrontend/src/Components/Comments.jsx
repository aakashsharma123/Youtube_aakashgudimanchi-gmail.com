import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Comments = () => {
    const { id } = useParams();
    const [Token, setToken] = useState(localStorage.getItem('token'));
    const [comments, setComments] = useState([]);
    const [messageComment, setmessageComment] = useState('');
    const [editId, setEditId] = useState(null)
    const [editmessage, setEditMessage] = useState('');


    const handlecomment = async (e) => {
        e.preventDefault();
        try {
            const url = 'http://localhost:3000/addcomment';

            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Authorization": Token,
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({ id, messageComment })
            });

            if (response.ok) {
                const result = await response.json();
                handleGetComments();
                console.log("adding Comment to backend", result);
            }
        } catch (err) {
            console.log("something happened", err);
        }
    };

    const handleGetComments = async () => {
        try {
            const url = `http://localhost:3000/getcomments/${id}`;
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    'Authorization': Token,
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                const result = await response.json();
                setComments(result.videoComment);
                console.log(result);
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        handleGetComments();
    }, [id, Token]);

    const handleDeleteButton = async (comment) => {
        const comment_id = (comment._id);
        const updatedComments = comments.filter((comment) => {
            return String(comment._id) !== String(comment_id);
        });
        await grabCommentAndDeleteinDataBase(comment);
        setComments(updatedComments);
    };

    const grabCommentAndDeleteinDataBase = async (deleteComment) => {
        const deleteCommentId = String(deleteComment._id);
        console.log(deleteCommentId);

        try {
            const url = `http://localhost:3000/deletecomment/${deleteCommentId}`

            const response = await fetch(url, {
                method: "DELETE",
                header: {
                    "Content-Type": "application/json"
                }
            })

            if (response.ok) {
                const result = await response.json();
                console.log(result);
            }
        } catch (err) {
            console.log('not deleted dont know why');
        }
    };

   

    const handleBackendUpdate = async (e) => {
            e.preventDefault();

        try {
            const url = `http://localhost:3000/updatecomment/${editId}`
            const response = await fetch (url , {
                method : "PUT",
                headers : {
                    "Authorization" : Token,
                    "Content-Type" : 'application/json'
                },

                body : JSON.stringify({editmessage})
            })

            if (response.ok) {
                const result = await response.json();
                console.log(result);
                handleGetComments();
                setEditId('');
                setmessageComment('')
            }
        }catch (err) {
                console.log("update not done");
        }
    }


    return (
        <>
            <div className="mx-20 flex mt-2 input-text bg-[#292929] xs:border-2 xs:border-yellow-800">
                <form className='max-w-full flex xs:borde-2 xs:border-red-400' onSubmit={handlecomment}>

                    <div className='flex w-[700px] '>
                        <input onChange={(e) => setmessageComment(e.target.value)} className='mt-2 block w-[90%] outline-none py-3 rounded-lg bg-transparent border m border-gray-600' type="text" required placeholder='add comment' />
                        <button type='submit' className='ml-5 border rounded-lg bg-red-500 text-white px-5 mt-2 hover:bg-green-500'>Comment</button>
                    </div>


                </form>
            </div>

            <div className='px-5 py-3'>
                {comments.map((comment, index) => (
                    <div key={index} className='border-2 border-gray-700 rounded-md w-full mt-5 px-5 py-2 flex justify-between items-center'>

                        {editId === comment._id ? (
                            <>
                                <div className='w-full flex'>

                                    <form className='w-full flex' onSubmit={handleBackendUpdate}>            
                                        <input onChange={(e) => setEditMessage(e.target.value)}  className='mt-2 w-[90%] outline-none py-3 rounded-lg bg-transparent border m border-gray-600' type="text" required placeholder='Update comment' />
                                        <button  onClick={() => setEditId (comment._id)}  className='ml-5 border rounded-lg bg-red-500 text-white px-5 mt-2 hover:bg-green-500'>Update</button>
                                    </form>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className='inline-block'>

                                    <p className='font-extrabold text-3xl'>{comment.messageComment}</p>
                                    <p className='text-sm'>Posted By <span className='font-extralight text-sm'>{comment.user.name}</span> </p>

                                </div>

                                <div className='flex gap-5'>
                                    <MdDelete onClick={() => { handleDeleteButton(comment) }} className='text-3xl hover:text-red-500' />
                                    <FaEdit onClick={(e) => setEditId(comment._id)} className='text-3xl hover:text-green-500 ' />

                                </div>
                            </>
                        )}


                    </div>
                ))}
            </div>
        </>
    );
};

export default Comments;