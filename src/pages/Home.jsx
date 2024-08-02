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
      // navigate('/auth/login');
    });
  }

  useEffect(() => {
    const readUserPost = async () => {
      setLoading(true);

      try {
        const { data } = await axios.get("/api/posts/all-posts");
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

  return (
    <div className="p-6">
      Home page
      <CreatePost />
      <h2 className="text-center">All Posts</h2>
      {posts ? 
      (
        <div>
          <PostCard content={posts} />
        </div>
      ) : 
      (
        <div><p>Loading...</p></div>
      )
      }
    </div>
  );
}

export default Home;
