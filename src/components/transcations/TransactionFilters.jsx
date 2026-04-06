import { useState } from "react";

const TransactionFilters = ({ onFilter }) => {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");

  const handleApply = () => {
    onFilter({ search, type });
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md mt-4">
      <div className="flex flex-col sm:flex-row gap-3">

        <input
          type="text"
          placeholder="Search category..."
          className="p-2 border rounded-lg w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="p-2 border text-black rounded-lg w-full sm:w-40"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <button
          onClick={handleApply}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full sm:w-auto"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default TransactionFilters;