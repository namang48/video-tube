import { useRef, useState, useEffect } from "react";
import { Button, InputBox } from "./index.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LogIn, Upload } from "lucide-react";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    username: "",
    password: "",
    avatar: "",
    coverImage: "",
  });

  const fullname = useRef(null);
  const email = useRef(null);
  const username = useRef(null);
  const password = useRef(null);
  const coverImage = useRef(null);
  const avatar = useRef(null);

  const handleRegister = async (event) => {
    event.preventDefault();

    setFormData((prev) => ({
      ...prev,
      fullname: fullname.current.value,
      email: email.current.value,
      password: password.current.value,
      username: username.current.value,
    }));

    try {
      const response = await axios.post("/api/v1/users/register", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("Success:", response.data);
      alert("Registration Successful!");
      navigate(`/login`);
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
      alert("Registration Failed");
    }
  };

  const handleAvatarChange = (event) => {
    setFormData((prev) => ({ ...prev, avatar: event.target.files[0] }));
  };
  const handleCoverChange = (event) => {
    setFormData((prev) => ({ ...prev, coverImage: event.target.files[0] }));
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    !loading && (
      <div className="max-w-[400px] mx-auto h-[90vh]">
        <form
          onSubmit={handleRegister}
          className="flex flex-col gap-1 h-full justify-center "
        >
          <h2 className="text-3xl font-bold text-blue-400 text-center pb-3">
            Sign Up Here
          </h2>
          <div className="flex">
            <label
              htmlFor="avatar"
              className="w-40 mx-auto flex flex-col justify-center items-center  border-1 border-dashed aspect-square"
            >

                <Upload/>
                <h1 className="text-xl font-bold text-center">Click to Upload Avatar</h1>
              

              <input
                type="file"
                id="avatar"
                ref={avatar}
                onChange={handleAvatarChange}
                hidden
              />
            </label>
            <label
              htmlFor="coverImage"
              className="w-40 mx-auto flex flex-col justify-evenly items-center  border-1 border-dashed aspect-square"
            >
              <Upload/>
              <h1 className="text-xl font-bold text-center">Click to Upload Cover Image</h1>
              <input
                type="file"
                id="coverImage"
                ref={coverImage}
                onChange={handleCoverChange}
                hidden
              />
            </label>
          </div>
          <label htmlFor="fullname" />
          <InputBox id="fullname" placeholder='Enter Fullname'  ref={fullname} />
          <label htmlFor="username" />
          <InputBox id="username" placeholder='Enter username' ref={username} />
          <label htmlFor="email" />
          <InputBox
            type="email"
            id="email"
            placeholder="abc@exapmle.com"
            ref={email}
          />
          <label htmlFor="password" />
          <InputBox
            type="password"
            id="password"
            name="password"
            placeholder=''
            ref={password}
          />
          <Button text="Sign up" icon={<LogIn />} className="px-20 mx-auto" />
        </form>
      </div>
    )
  );
};

export default RegisterForm;
