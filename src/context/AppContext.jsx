import { createContext, useContext, useState, useEffect } from "react";
import mockData from "../data/mockData";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  
  const [transactions, setTransactions] = useState(mockData);


  const [role, setRole] = useState("admin"); 

 
  useEffect(() => {
    try {
      const data = localStorage.getItem("transactions");

      if (data) {
        const parsed = JSON.parse(data);
        setTransactions(Array.isArray(parsed) ? parsed : []);
      } else {
        setTransactions(mockData);
      }
    } catch (error) {
      console.error("Error loading data:", error);
      setTransactions(mockData);
    }
  }, []);

  
  useEffect(() => {
    if (transactions.length > 0) {
      localStorage.setItem("transactions", JSON.stringify(transactions));
    }
  }, [transactions]);

 
 const addTransaction = (tx) => {
  if (!tx || !tx.amount) return;

  const newTx = {
    ...tx,
    id: Date.now(),
    amount: Number(tx.amount),
    category: tx.title || "Other",
    date: tx.date || new Date().toISOString().split("T")[0],
  };

  setTransactions((prev) => [...prev, newTx]);
};

  
  const deleteTransaction = (id) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  };


  const getTotalIncome = () =>
    transactions
      .filter((t) => t.type === "income")
      .reduce((a, c) => a + Number(c.amount), 0);

  const getTotalExpense = () =>
    transactions
      .filter((t) => t.type === "expense")
      .reduce((a, c) => a + Number(c.amount), 0);

  const getBalance = () => getTotalIncome() - getTotalExpense();

  return (
    <AppContext.Provider
      value={{
        transactions,
        addTransaction,
        deleteTransaction,
      
        getTotalIncome,
        getTotalExpense,
        getBalance,
        role,
        setRole,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};


export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used inside AppProvider");
  }

  return context;
};