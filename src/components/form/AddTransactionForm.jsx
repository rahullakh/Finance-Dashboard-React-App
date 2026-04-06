import { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import useThemeStyles from "../../hook/useStyles";
const AddTransactionForm = () => {
  const { addTransaction } = useAppContext();
  const styles = useThemeStyles();

  const [data, setData] = useState({
    category: "",
    amount: "",
    type: "income",
    date: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.category || !data.amount || !data.date) {
      setError("All fields are required");
      return;
    }

    if (data.amount <= 0) {
      setError("Amount must be greater than 0");
      return;
    }

    addTransaction(data);

    setData({
      category: "",
      amount: "",
      type: "income",
      date: "",
    });

    setError("");
  };

  return (
    <div className={`p-4 rounded-2xl shadow-md w-full ${styles.card}`}>

      {error && (
        <p className="text-red-500 text-sm mb-2">
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-3">

    
        <input
          type="text"
          placeholder="Enter category (Food, Salary...)"
          value={data.category}
          onChange={(e) =>
            setData({ ...data, category: e.target.value })
          }
          className={`w-full p-2 rounded-lg border font-semibold ${styles.input}`}
        />

  
        <input
          type="number"
          placeholder="Enter amount"
          value={data.amount}
          onChange={(e) =>
            setData({ ...data, amount: e.target.value })
          }
          className={`w-full p-2 rounded-lg border font-semibold ${styles.input}`}
        />

     
        <select
          value={data.type}
          onChange={(e) =>
            setData({ ...data, type: e.target.value })
          }
          className={`w-full p-2 rounded-lg border font-semibold ${styles.input}`}
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

      
        <input
          type="date"
          value={data.date}
          onChange={(e) =>
            setData({ ...data, date: e.target.value })
          }
          className={`w-full p-2 rounded-lg border font-semibold ${styles.input}`}
        />

     
        <button
          type="submit"
          className={`w-full text-white px-5 py-2 rounded-lg shadow-md transition-all duration-300 hover:scale-105 ${styles.primaryBtn}`}
        >
          Add Transaction
        </button>

      </form>
    </div>
  );
};

export default AddTransactionForm;