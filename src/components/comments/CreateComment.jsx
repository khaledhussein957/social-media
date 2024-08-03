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
      className="bg-gray-50 mt-3 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type="text"
        value={comment}
        onChange={(event) => setComment(event.target.value)}
        placeholder="Write a comment..."
      />
      <button className="text-black mt-4 ml-28 w-[100px] h-12 bg-white text-[10px] m-[10px, 100px] pt-[8px] pb-[10px] rounded-[40px]" type="submit">Comment</button>
    </form>
  );
}

export default CreateComment;
