function PostCard({ post, onDelete }) {
  return (
    <div className="bg-black w-[350px] h-[100px] rounded m-4 border">
      <p className="text-white text-center">{post.content}</p>
      <button
        onClick={() => onDelete(post._id)}
        className="bg-red-700  text-white rounded py-2 px-4"
      >
        {" "}
        Delete Post
      </button>
    </div>
  );
}

export default PostCard;
