import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

import { useTheme } from "../../context/ThemeContext";
const Layout = () => {
  
  const{theme} = useTheme();
  return (
    <div className="flex h-screen overflow-hidden">
      
      <Sidebar />

      <div className="flex flex-col flex-1">
        
        <Navbar  />

        
       <main
      className={`p-4 flex-1 overflow-y-auto ${
        theme === "light"
          ? "bg-gray-100 text-black"
          : theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-white/10 backdrop-blur-md text-white"
      }`}
    >
      <Outlet />
    </main>

      </div>
    </div>
  );
};

export default Layout;