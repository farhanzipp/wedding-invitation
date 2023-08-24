import { collection, addDoc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../utils/firebase';

const CommentSection = () => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const addComment = async (e) => {
    e.preventDefault();

    if (name && comment) {
      try {
        const docRef = await addDoc(collection(db, "comments"), {
          name: name,
          comment: comment,
        });
        console.log("Document written with ID: " , docRef.id);
        setName('');
        setComment('');
        fetchComment();
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  }

  const fetchComment = async () => {
    await getDocs(collection(db, "comments"))
      .then((QuerySnapshot)=> {
        const newData = QuerySnapshot.docs
          .map((doc) => ({...doc.data(), id:doc.id}));
          setComments(newData);
          console.log(comments, newData);
      })
  }

  useEffect(() => {
    fetchComment();
  },[]);

  return (
    <div>
      {/* Display Comments */}
      <div className="mt-4">
        {comments.length === 0 ? (
          <p>No comments yet.</p>
        ) : (
          <ul>
            {comments?.map((comment, index) => (
              <li key={index} className="mb-2 p-3 text-left rounded-sm bg-white shadow-lg">
                <p className="font-semibold text-sm">{comment.name}</p>
                <p className='mt-1 text-xs'>{comment.comment}</p>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Comment Form */}
      <form onSubmit={addComment} className="max-w-md mx-auto mt-7 p-4 border border-pink-900 rounded-md shadow">
        <div className="mb-3">
          <input
            type="text"
            value={name}
            placeholder="nama"
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 w-full border border-pink-800 rounded-md focus:ring focus:ring-indigo-200"
            required
          />
        </div>
        <div className="mb-3">
          <textarea
            value={comment}
            placeholder='tulis pesan'
            onChange={(e) => setComment(e.target.value)}
            className="mt-1 p-2 w-full border border-pink-800 rounded-md focus:ring focus:ring-indigo-200"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-pink-900 text-white px-4 py-2 rounded-md hover:bg-pink-700"
        >
          Kirim Pesan
        </button>
      </form>

      
      
    </div>
  );
};

export default CommentSection;
