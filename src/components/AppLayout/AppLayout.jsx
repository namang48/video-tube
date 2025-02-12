import { useState } from "react";
import React from "react";
import { Outlet } from "react-router-dom";
import {Header,Sidebar,Container} from "../index";


const AppLayout = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);

  const toggleSidebar = () => {
    setSidebarToggle(!sidebarToggle);
  };
  return (
    <>
      <Header sidebarSetter={toggleSidebar} />
        <Container className='flex'>
        <Sidebar toggle ={sidebarToggle}/>
        <Outlet />
      </Container>
    </>
  );
};

export default AppLayout;
