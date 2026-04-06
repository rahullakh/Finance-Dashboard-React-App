import { useState } from "react";
import { useAppContext } from "../context/AppContext";

import { useTheme } from "../context/ThemeContext";
const Setting = () => {
  const { setTransactions } = useAppContext();
  const { theme } = useTheme();
  const [user, setUser] = useState({
    name: "Rahul Lakhera",
    email: "rahullakhera982@gmail.com",
    address: "Jaipur,Rajasthan",
  });

  const handleClearData = () => {
    localStorage.removeItem("transactions");
    setTransactions([]);
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8  min-h-screen space-y-6">
      <h2
        className={`${theme === "light" ? "text-black" : "text-white"}text-lg font-semibold`}
      >
       Settings
      </h2>

      <div className="bg-white p-4 sm:p-5 lg:p-6 rounded-xl shadow space-y-4">
        <h2 className="text-lg text-black font-semibold">Profile</h2>

        <div className="flex flex-col text-black sm:flex-row gap-4">
          <input
            type="text"
            value={user.name}
            onChange={(e) => setUser(e.target.value)}
            placeholder="Enter Name....."
            className="flex-1 p-2 border rounded"
          />
          <input
            type="text"
            value={user.email}
            onChange={(e) => setUser(e.target.value)}
            placeholder="Enter Email...."
            className="flex-1 p-2 border rounded"
          />
          <input
            type="text"
            value={user.address}
            onChange={(e) => setUser(e.target.value)}
            placeholder="Enter Address...."
            className="flex-1 p-2 border rounded"
          />

          <button
            className="text-white px-5 py-2 rounded-lg shadow-md transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #0f172a, #1e1b4b, #0f766e)",
            }}
          >
            Save
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <span
          className={`${theme === "light" ? "text-black" : "text-white"} font-semibold`}
        >
          Currency
        </span>

        <select className="p-2 text-black border rounded w-full sm:w-40">
          <option value="INR">₹ INR</option>
          <option value="USD">$ USD</option>
          <option value="EUR">€ EUR</option>
        </select>
      </div>

      <div className="bg-white text-black p-4 sm:p-5 lg:p-6 rounded-xl shadow space-y-4">
        <h2 className="text-lg font-semibold"> Data Management</h2>

       <button
  onClick={handleClearData}
  className="bg-gradient-to-r from-red-500 via-rose-500 to-pink-500 text-white px-4 py-2 rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 w-full sm:w-auto"
>
  Clear All Transactions
</button>
      </div>
    </div>
  );
};

export default Setting;
