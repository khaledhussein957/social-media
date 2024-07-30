import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import toast from 'react-hot-toast';

function DeletePost() {

    const [loading, setLoading] = useState(false)

    const handleDeletePost = async (e) => {
        e.preventDefault();
        loading(true);

        try {
            const {data} = await axios.delete('/api/delete-post/:id');
            if(data.error){
                toast.error(data.error);
                loading(false);
            }

            toast.success(data.message);
            loading(false);
            
        } catch (error) {
            console.log(error);
            loading(false);
        }
    }

  return (
    <div>
      <button onClick={handleDeletePost}>{loading ? "Deleting..." : "Delete post"}</button>
    </div>
  )
}

export default DeletePost
