import React, { useState } from 'react';
import axios from 'axios';

function DreamForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/dreams/', { title, content, tags })
      .then(response => console.log(response.data))
      .catch(error => console.error('Error:', error));
  };

// Submit function
axios.post('http://localhost:8000/api/dreams/', { title, content, tags })
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Content:</label>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      </div>
      <div>
        <label>Tags:</label>
        <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default DreamForm;
