import { useEffect, useState } from "react";
import { MdOutlineSummarize } from "react-icons/md";
import SideBarItem from "./SideBarItem";
import { User } from "./User";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SideBarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isusername, setisUsername] = useState("");

  const navigate = useNavigate()

 useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_NITIFY_DOMAIN}/api/v1/nitify/userCredentials`,
          {
             withCredentials: true, // 👈 needed to store cookie from server
          }
        );

        const username = response.data.username; // adjust key based on API response
        if (username) setisUsername(username);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchUserData();
}, [isusername]);

  return (
    <>
      {/* Toggle Button for Mobile */}
      <div className="sm:hidden fixed bottom-8 right-5 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-800/90 text-white p-4 rounded-4xl shadow-lg"
        >
          <MdOutlineSummarize size={24} />
        </button>
      </div>

      {/* Sidebar */}
      <section
        className={`fixed top-0 left-0 h-full z-40 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:translate-x-0 md:relative md:flex md:flex-col
        w-64 md:w-[25vw] p-4 bg-gray-200 dark:bg-gray-900`}
      >
        {/* Headline */}
        <div className="flex flex-row items-center gap-2 mb-4">
          <MdOutlineSummarize size={32} className="text-blue-500" />
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white cursor-pointer" onClick={() => navigate("/")}>Niftify</h1>
        </div>

        {/* Items */}
        <SideBarItem />

        {/* User Info */}

        <div className="mt-auto md:block">
          <User username={isusername} id={`user92392759237582`}/>
        </div>

       </section>
    </>
  );
};

export default SideBarComponent;
