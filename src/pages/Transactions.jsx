import { useState, useEffect } from "react";
import { useAppContext } from "../context/AppContext";
import TransactionTable from "../components/transcations/TransactionTable";
import TransactionFilters from "../components/transcations/TransactionFilters";
import useThemeStyles from "../hook/useStyles";
import TransactionForm from "../components/form/TransactionForm";

const Transactions = () => {
  const { transactions, deleteTransaction, role, isModalOpen, setIsModalOpen } =
    useAppContext();
  const styles = useThemeStyles();

  const [filtered, setFiltered] = useState(transactions);

  useEffect(() => {
    setFiltered(transactions);
  }, [transactions]);

  const handleFilter = ({ search, type }) => {
    let data = [...transactions];

    if (search) {
      data = data.filter((tx) =>
        tx.category.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (type !== "all") {
      data = data.filter((tx) => tx.type === type);
    }

    setFiltered(data);
  };

  const handleReset = () => {
    setFiltered([]);
  };

  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <h1 className="text-xl md:text-2xl font-bold">Transactions</h1>

        <span className={`text-sm ${styles.subText}`}>
          Total: {filtered.length}
        </span>
      </div>

      <div className={`p-4 rounded-2xl shadow-md ${styles.card}`}>
        <TransactionFilters onFilter={handleFilter} />

        <div className="mt-3 text-right">
          <button
            onClick={handleReset}
            className={`text-sm hover:underline ${styles.expense}`}
          >
            Reset Filters
          </button>
        </div>
      </div>

      <div className="space-y-4">
        
        <div className={`p-4 rounded-2xl shadow-md ${styles.card}`}>
          {filtered.length === 0 ? (
            <div className={`text-center py-10 ${styles.subText}`}>
              No transactions found
            </div>
          ) : (
            <TransactionTable
              transactions={filtered}
              role={role}
              onDelete={deleteTransaction}
            />
          )}
        </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

          <div className={`w-full max-w-md p-4 rounded-2xl shadow-lg relative ${styles.card}`}>

         
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-1 right-3 text-xl"
            >
              ✖
            </button>

            
            <TransactionForm />

          </div>

        </div>
      )}
      </div>
    </div>
  );
};

export default Transactions;
