import { useState } from "react";

import useThemeStyles from "../hook/useStyles";
const RoleSwitcher = () => {
  const [role, setRole] = useState("user");
  
  const styles = useThemeStyles();


  return (
    <div className={`flex items-center gap-2 p-2 rounded-xl shadow-md ${styles.card}`}>

      <span className="text-sm sm:text-base font-medium">
        Role:
      </span>

      <div className={`flex rounded-lg p-1`}>

        <button
          onClick={() => setRole("user")}
          className={`px-3 py-1 text-sm rounded-lg transition 
            ${role === "user" 
              ? "bg-blue-500 text-white" 
              : styles.subText
            }`}
        >
          User
        </button>

        <button
          onClick={() => setRole("admin")}
          className={`px-3 py-1 text-sm rounded-lg transition 
            ${role === "admin" 
              ? "bg-blue-500 text-white" 
              : styles.subText
            }`}
        >
          Admin
        </button>

      </div>
    </div>
  );
};

export default RoleSwitcher;