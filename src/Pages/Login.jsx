import { useEffect } from "react"
import { Header ,LoginForm} from "../components"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Login = () => {
  const authStatus = useSelector(state=>state.auth.authStatus);
  const navigate = useNavigate();
  useEffect(() => {
    console.log("Auth status ",authStatus);
    if(authStatus){
      navigate("/");
    }
  },[])
  return (
    <div className="flex items-center justify-center w-full">      
      <LoginForm className='' />
    </div>
  )
}

export default Login