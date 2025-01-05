import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import '../Styles/Comment.css'

const Comments = () => {
    
  const { id } = useParams();
  const [Token, setToken] = useState(localStorage.getItem('token'));
  const [comments, setComments] = useState([]);
  const [messageComment, setmessageComment] = useState('');
  const [editId, setEditId] = useState(null);
  const [editmessage, setEditMessage] = useState('');
  const [handledelupdate, sethandleDelUpdate] = useState(true);
  const [currentid , setCurrentId] = useState(localStorage.getItem('id'));

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
        setmessageComment("");
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
        setmessageComment("");
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

    try {
      const url = `http://localhost:3000/deletecomment/${deleteCommentId}`;

      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Authorization": Token,
          "Content-Type": "application/json"
        }
      });

      if (response.ok) {
        const result = await response.json();
      }
    } catch (err) {
      console.log('not deleted dont know why');
    }

    setmessageComment("");
  };

  const handleBackendUpdate = async (e) => {
    e.preventDefault();

    try {
      const url = `http://localhost:3000/updatecomment/${editId}`;
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Authorization": Token,
          "Content-Type": 'application/json'
        },
        body: JSON.stringify({ editmessage })
      });

      if (response.ok) {
        const result = await response.json();
        handleGetComments();
        setEditId('');
        setmessageComment('');
      }
    } catch (err) {
      console.log("update not done");
    }
  };

  return (
    <>
      <section className="container-1 mx-4 flex mt-2 input-text bg-[#292929] xs:flex xs:h-[80%] sm:h-[80%] ">
        <form className=' form-container max-w-full flex xs:flex xs:flex-wrap' onSubmit={handlecomment}>
          <input onChange={(e) => setmessageComment(e.target.value)} className='mt-2 block w-[700px] outline-none  py-3 rounded-lg bg-transparent border border-gray-600 xs:px-3 xs:flex xs:justify-start xs:flex-auto' type="text" required placeholder='add comment' />
          <button type='submit' className='comments_button ml-5 border rounded-lg bg-red-500 text-white px-5 mt-2 hover:bg-green-500  xs:mr-5 '>Comment</button>
        </form>
      </section>

      <section className='px-5 py-3'>
        {comments.map((comment, index) => (
          <article key={index} className='border-2 border-gray-700 rounded-md w-full mt-5 px-5 py-2 flex flex-col justify-between items-start'>
            {editId === comment._id ? (
              <div className='w-full flex xs:p-3'>
                <form className='w-full flex xs:full xs:flex-wrap' onSubmit={handleBackendUpdate}>
                  <input onChange={(e) => setEditMessage(e.target.value)} className='mt-2 w-[90%] outline-none py-3 rounded-lg bg-transparent border border-gray-600 xs:w-[170px]' type="text" required placeholder='Update comment' />
                  <button onClick={() => setEditId(comment._id)} className='ml-5 border rounded-lg bg-red-500 text-white px-5 mt-2 hover:bg-green-500'>Update</button>
                </form>
              </div>
            ) : (
              <>
                <div className='inline-block'>
                  <p className='font-extrabold text-base xs:text-lg'>{comment.messageComment}</p>
                  {comment.user && ( 
                    <p className='text-sm'>Posted By <span className='font-extralight text-sm'>{comment.user.name}</span> </p>
                  )} 
                </div>
                {currentid === comment.user?._id && ( 
                  <div className={handledelupdate ? "flex justify-start w-full gap-5 mt-2" : "hidden"}>
                    <MdDelete onClick={() => { handleDeleteButton(comment) }} className='text-2xl xs:text-3xl hover:text-red-500' />
                    <FaEdit onClick={(e) => setEditId(comment._id)} className='text-2xl xs:text-3xl hover:text-green-500' />
                  </div>
                )}
              </>
            )}
          </article>
        ))}
      </section>
    </>
  );
};

export default Comments;