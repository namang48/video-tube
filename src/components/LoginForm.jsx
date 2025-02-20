import { useRef, useState} from "react";
import { Button, InputBox } from "./index.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LogIn} from "lucide-react";
import { login } from "../store/authSlice.js";
import { useDispatch, useSelector } from "react-redux";

const LoginForm = ({className=''}) => {
    const dispatch = useDispatch();
    const authStatus = useSelector(state=>state.auth.authStatus)
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
      username: "",
      password: "",
    });


  
    const username = useRef(null);
    const password = useRef(null);

    const handleChange=()=>{
      setFormData((prev) => ({
        ...prev,
        username: username.current.value,
        password: password.current.value,
      }));
    }
  
    const handleRegister = async (event) => {
      event.preventDefault();
  
      try {
        const response = await axios.post("/api/v1/users/login", formData, {
          headers: { "Content-Type": "application/json" },
        });
  
        console.log("Success: ", response.data);
        alert("Login Successful!");
        console.log("X response is :",response.data.data.user)
        dispatch(login(response));
        navigate(`/`);
      } catch (error) {
        console.error(
          "Error:",
          error.response ? error.response.data : error.message
        );
        alert("Login Failed " + error);
      }
    }
  
    return (
      !authStatus ? (
        <div className={`max-w-[400px] mx-auto h-[90vh] ${className}`}>
          <form
            onSubmit={handleRegister}
            className="flex flex-col gap-1 h-full justify-center "
          >
            <h2 className="text-3xl font-bold text-blue-400 text-center pb-3">
              Login Here
            </h2>
                              
            <InputBox id="username"placeholder="username" ref={username} onChange={handleChange} />
            
            <InputBox
              type="password"
              id="password"
              placeholder= "" 
              name="password"
              onChange={handleChange}
              ref={password}
            />
            
            <Button text="Log in" icon={<LogIn />} className="px-20 mx-auto" />
          </form>
        </div>
      ) : (
    <h2>Already Logged In{authStatus ? ("yes") : ("No")}</h2>
    
      )
    );
}

export default LoginForm