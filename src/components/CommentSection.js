import React, { useState } from 'react';

const CommentSection = () => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && comment) {
      const newComment = { name, comment };
      setComments([...comments, newComment]);
      setName('');
      setComment('');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded-md shadow">
      <h2 className="text-xl font-semibold mb-4">Comment Section</h2>

      {/* Comment Form */}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-200"
            required
          />
        </div>
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700">Comment</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-200"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
        >
          Post Comment
        </button>
      </form>

      {/* Display Comments */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Comments:</h3>
        {comments.length === 0 ? (
          <p>No comments yet.</p>
        ) : (
          <ul>
            {comments.map((comment, index) => (
              <li key={index} className="mb-2">
                <span className="font-semibold">{comment.name}: </span>
                {comment.comment}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
