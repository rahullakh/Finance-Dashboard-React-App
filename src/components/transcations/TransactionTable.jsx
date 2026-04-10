import TransactionRow from "./TransactionRow"
import { Link } from "react-router-dom";
import useThemeStyles from "../../hook/useStyles";

const TransactionTable = ({ transactions, role, onDelete }) => {
  const styles = useThemeStyles();

  return (
    <div className="w-full">

  
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-sm sm:text-base">

          <thead>
            <tr className={`text-left border-b ${styles.border}`}>
              <th className="py-2">Date</th>
              <th className="py-2">Category</th>
              <th className="py-2">Type</th>
              <th className="py-2">Amount</th>
              {role === "admin" && (
                <th className="py-2 text-right">Action</th>
              )}
            </tr>
          </thead>

          <tbody>
            {transactions.length === 0 ? (
              <tr>
                <td colSpan="5" className={`text-center py-4 ${styles.subText}`}>
                  No transactions found
                </td>
              </tr>
            ) : (
              transactions.map((tx) => (
                <TransactionRow
                  key={tx.id}
                  tx={tx}
                  role={role}
                  onDelete={onDelete}
                 
                />
              ))
            )}
          </tbody>

        </table>
      </div>

   
      <div className="md:hidden space-y-3">
        {transactions.length === 0 ? (
          <div className={`text-center ${styles.subText}`}>
            No transactions found
          </div>
        ) : (
          transactions.map((tx) => (
            <div
              key={tx.id}
              className={`p-4 rounded-xl shadow-sm ${styles.card}`}
            >
              <div className="flex justify-between">
                <span className="font-semibold">{tx.category}</span>
                <span className="font-bold">₹ {tx.amount}</span>
              </div>

              <div className={`text-sm mt-1 ${styles.subText}`}>
                {tx.date}
              </div>

              <div className="mt-2 flex justify-between items-center">

             
                <span
                  className={`px-2 py-1 text-xs rounded ${
                    tx.type === "income"
                      ? `${styles.income} bg-green-100`
                      : `${styles.expense} bg-red-100`
                  }`}
                >
                  {tx.type}
                </span>

              
                {role === "admin" && (
                  <button
                    onClick={() => onDelete(tx.id)}
                    className={`${styles.dangerBtn} px-4 py-2 rounded-lg shadow-md hover:scale-105 transition-all duration-300`}
                  >
                    Delete
                  </button>
                )}

              </div>
            </div>
          ))
        )}
      </div>

     
      {transactions.length > 0 && (
        <div className="mt-3 text-right">
          <Link
            to="/"
            className={`text-sm hover:underline ${styles.link}`}
          >
            View All
          </Link>
        </div>
      )}

    </div>
  );
};

export default TransactionTable;