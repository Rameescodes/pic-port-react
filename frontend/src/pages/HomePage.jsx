import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/reducers/authSlice";



function HomePage() {
  const selectUser = (state) => state.auth.user
  const user = useSelector(selectUser)
  const userId = user._id || "";
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState([])
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    try {
      fetchPosts();
    } catch (error) {
      console.log(error);
    }
  }, [])

  const fetchPosts = () => {
    setLoading(true);
    getPosts({ userId: userId })
      .then((response) => {
        const postData = response.data
        setPosts(postData)
      })
      .catch((error) => {
        toast.error(error?.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }


    const handleLogout = () => {
      dispatch(logout());
      localStorage.removeItem("email");
      toast.info("logout successful")
      navigate("/login")
    }


  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome</h1>
      <p className="text-2xl mb-4">😊</p>
      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Logout
      </button>
    </div>
    </>
  )
}

export default HomePage