import { useTheme } from "../../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
   const {theme, toggleTheme } = useTheme();

  return (
    <div className={`
             flex items-center justify-between border border-b-1 p-4 shadow-md`}>
       
      <h1 className="text-lg font-semibold">Dashboard</h1>

      <button
      onClick={toggleTheme}
     className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300  
   `}
    >
      {theme === "light" ? <FaSun /> : <FaMoon />}
    
    </button>
    </div>
  );
}

export default Navbar
