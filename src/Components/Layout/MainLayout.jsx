import React from "react";
import NavBar from "../../NavBar/NavBar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../HomePage/Footer/Footer";
import { TimelineProvider } from "../../context/TimelineContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <TimelineProvider>
      <div className="relative min-h-screen">
        <NavBar></NavBar>

        {isLoading && (
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100] p-4 bg-white/80 rounded-full shadow-md backdrop-blur-sm border border-gray-100">
            <span className="loading loading-spinner loading-lg text-[#244D3F]"></span>
          </div>
        )}

        <div
          className={`transition-opacity duration-200 ${isLoading ? "opacity-40 pointer-events-none" : "opacity-100"}`}
        >
          <Outlet></Outlet>
        </div>

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
