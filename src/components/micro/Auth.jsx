import React, { useEffect } from "react";
import { SubmitBtn, SecondaryBtn } from "../index";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'

const Auth = ({ children, className, toggle = false, ...props }) => {

  const {authStatus,userData} = useSelector(state=>state.auth)

  const navigate = useNavigate();
  useEffect(() => {
    toggle = false;
    console.log(authStatus);
  });
  return (
    <div
      className={`absolute border-gray-500 h-30 w-50 right-10 top-20 rounded-xl ${
        toggle ? "" : "hidden"
      } ${className} transition-all duration-2000 ease-in-out`}
      {...props}
    >
      <div>
        {JSON.stringify(userData)}
      </div>
      {
      // !authStatus && 
      <div className="flex flex-col justify-center h-full items-center ">
        <SubmitBtn
          className="max-w-28 "
          onClick={() => {
            navigate(`/register`);
          }}
        />
        <SecondaryBtn
          text="login"
          className="max-w-28 "
          onClick={() => {
            navigate(`/login`);
          }}
        />
      </div>}
    </div>
  );
};

export default Auth;
