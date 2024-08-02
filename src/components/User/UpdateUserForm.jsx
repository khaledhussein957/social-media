import axios from 'axios';
import { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/User-context';

function UpdateUserForm() {

  const [formData, setFormData] = useState({
    firstName:'',
    lastName:'',
    email:'',
    password:''
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { setUser } = useUser();

  // if(!user){
  //   useEffect(() => {
  //     navigate('/auth/login');
  //   }, [])
  // }

  const handleInputChange = async (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)

    try {
      const {data} = await axios.post('/api/users/update-profile' , formData);
      if(data.error){
        toast.error(data.error);
        setLoading(false);
      } else{
        toast.success(data.message);
        setUser(null);
        navigate('/auth/login');
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  return (
    <div className=''>
      <form onSubmit={handleSubmit}>
        <label>username: </label>
        <input type="text" onChange={handleInputChange} />
        <label>email: </label>
        <input type="text" onChange={handleInputChange} />
        <label>password:</label>
        <input type="password" onChange={handleInputChange} />
        <button>{loading ? "updating..." : "update"}</button>
      </form>
    </div>
  )
}

export default UpdateUserForm
