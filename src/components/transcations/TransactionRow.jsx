const TransactionRow = ({ tx, role, onDelete }) => {
    
    
  return (
    <tr className="border-b hover:bg-gray-100 dark:hover:bg-gray-700 transition">
        
      <td className="py-2">{tx.date}</td>
      <td className="py-2">{tx.category}</td>

      <td className="py-2">
        <span
          className={`px-2 py-1 text-xs rounded ${
            tx.type === "income"
              ? "bg-green-100 text-green-600"
              : "bg-red-100 text-red-600"
          }`}
        >
          {tx.type}
        </span>
      </td>

      <td className="py-2 font-medium">₹ {tx.amount}</td>

      {role === "admin" && (
        <td className="py-2 text-right">
          <button
            onClick={() => onDelete(tx.id)}
  className="bg-gradient-to-r from-red-500 via-rose-500 to-pink-500 text-white px-4 py-2 rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 w-full sm:w-auto"
          >
            Delete
          </button>
        </td>
      )}
    </tr>
  );
};

export default TransactionRow;