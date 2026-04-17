import React from "react";
import NavBar from "../../NavBar/NavBar";
import { Outlet } from "react-router";
import Footer from "../HomePage/Footer/Footer";
import { TimelineProvider } from "../../context/TimelineContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
  return (
    <TimelineProvider>
      <div>
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer></Footer>
        <ToastContainer 
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </TimelineProvider>
  );
};

export default MainLayout;
