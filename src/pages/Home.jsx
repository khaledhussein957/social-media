import CreatePost from "../components/Posts/CreatePost";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/User-context";
import { useEffect } from "react";
import { useState } from "react";
import PostCard from "../components/Posts/PostCard";
import axios from "axios";
import toast from "react-hot-toast";

function Home() {
  const { user } = useUser();
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  if (!user) {
    useEffect(() => {
      navigate('/auth/login');
      toast.error('Please Login!');
    });
  }

  // read user posts
  useEffect(() => {
    const readUserPost = async () => {
      setLoading(true);

      try {
        const { data } = await axios.get("/api/posts/get-user-posts");
        console.log(data);
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
        toast.error(error.message);
      }
    };

    readUserPost();
  }, []);

  // delete post
  const deletePost = async (postId) => {
    // ensure if use want to delete the post
    if(!confirm("Are you sure!")) return;

    // gets the posts
    const previousPost = [...posts];
    // updates the posts
    const reloadPOsts = posts.filter(post => post._id != postId);
    setPosts(reloadPOsts);    

    try {
      const { data } = await axios.get("/api/posts/delete-post/" + postId);
      toast.success('Deleted successfully');
    } catch (error) {
      setPosts(previousPost);
      console.log(error.message);
      toast.error(error.message);
      setLoading(false);
    }
  };



  return (
    <div className="p-6">
      Home page
      <CreatePost />
      <h2 className="text-center">All Posts</h2>
      {loading && <h1 className="text-cente r">Loading...</h1>}
      <div className="grid grid-cols-3 gap-4">
        {posts?.map((post) => (
          <PostCard key={post._id} post={post} onDelete={deletePost} />
        ))}
      </div>
    </div>
  );
}

export default Home;
