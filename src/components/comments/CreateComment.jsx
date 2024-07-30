import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

function CreateComment() {

    const[comment , setComment] = useState('');
    const [loading , setLoading] = useState(false);

    const handleInputChange = (e)=>{
        setComment(e.target.value);
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();

        try {
            const data = await axios.post(`/api/create-comment` , comment);
            toast.success('Comment created successfully!');
            console.log(data);
        } catch (error) {
            toast.error('Filed to create comment!');
            console.log(error);
        }
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Comment: </label>
        <textarea value={comment} onChange={handleInputChange} />
        <button>{ loading ? "creating..." : "create comment"}</button>
      </form>
    </div>
  )
}

export default CreateComment
