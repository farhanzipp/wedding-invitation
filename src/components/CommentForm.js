import React, { useState } from 'react';

const CommentForm = () => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbxMCOqOdws83Xc2ZCOaIoKNMTqcu17XFKH33r6tYm-HS1wNdEmcTgYUfEHy02YZC3PF/exec', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, comment }),
      });

      if (response.ok) {
        alert('Comment added successfully');
        setName('');
        setComment('');
      } else {
        alert('Error adding comment');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Comment:</label>
        <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
      </div>
      <button type="submit">Post Comment</button>
    </form>
  );
};

export default CommentForm;
