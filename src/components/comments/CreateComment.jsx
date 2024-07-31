import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

function CreateComment({postId}) {
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const data = await axios.post(`/api/create-comment`, comment , postId);
      toast.success("Comment created successfully!");
      setLoading(false);
      console.log(data);
    } catch (error) {
      toast.error("Filed to create comment!");
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={comment}
        onChange={(event) => setComment(event.target.value)}
        placeholder="Write a comment..."
      />
      <button type="submit">Comment</button>
    </form>
  );
}

export default CreateComment;
