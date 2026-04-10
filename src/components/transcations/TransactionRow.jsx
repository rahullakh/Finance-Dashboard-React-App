import { useAppContext } from "../../context/AppContext";
import { FiEdit, FiTrash2 } from "react-icons/fi";
const TransactionRow = ({ tx, role, onDelete }) => {
  const {
    setSelectedTx,
    setIsEditMode,
    setIsModalOpen
  } = useAppContext();
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
  <td className="py-2 text-right space-x-3">

    <button
      onClick={() => {
        setSelectedTx(tx);
        setIsEditMode(true);
        setIsModalOpen(true);
      }}
      className="text-blue-500 text-xl hover:scale-110 transition"
      title="Edit"
    >
      <FiEdit />
    </button>

    <button
      onClick={() => onDelete(tx.id)}
      className="text-red-500 text-xl hover:scale-110 transition"
      title="Delete"
    >
      <FiTrash2 />
    </button>

  </td>
)}
    </tr>
  );
};

export default TransactionRow;
