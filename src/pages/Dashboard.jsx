import { FaArrowUp, FaArrowDown, FaWallet } from "react-icons/fa";
import { useAppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

import RoleSwitcher from "../components/RoleSwitcher";
import SummaryCard from "../components/cards/SummaryCard";
import PieChartComponent from "../components/charts/PieChartComponent";
import LineChartComponent from "../components/charts/LineChartComponent";
import Insights from "../components/insights/Insights";
import TransactionForm from "../components/form/TransactionForm";
import TransactionTable from "../components/transcations/TransactionTable";

const Dashboard = () => {
  const {
    transactions,
    deleteTransaction,
    role,
    getTotalIncome,
    getTotalExpense,
    getBalance,
  } = useAppContext();
 

 const summaryData = [
    {
      title: "Total Income",
      amount: getTotalIncome(),
      icon: <FaArrowUp />,
   
    },
    {
      title: "Total Expense",
      amount: getTotalExpense(),
      icon: <FaArrowDown />,

    },
    {
      title: "Balance",
      amount: getBalance(),
      icon: <FaWallet />,
      
    },
  ];
 
if (!transactions || transactions.length === 0) {
  return <div className="p-6">Loading...</div>;
}

  return (
    <div className="p-4 sm:p-6 space-y-6">

     
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-xl sm:text-2xl font-bold">Dashboard</h1>
        <RoleSwitcher />
      </div>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {summaryData.map((item, index) => (
          <SummaryCard key={index} {...item} />
        ))}
      </div>

  
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <LineChartComponent />
        <PieChartComponent />
      </div>

     
      <div className=" p-4 rounded-2xl shadow-md">
        <h2 className={`text-lg font-semibold mb-3`}>Add Transaction</h2>
        <TransactionForm />
      </div>

     
      <div className=" p-4 rounded-2xl shadow-md">
        
        <div className="flex justify-between items-center mb-3">
          <h2 className={`text-lg font-semibold`}>Recent Transactions</h2>

          <Link
            to="/transactions"
            className="text-blue-500 text-sm hover:underline"
          >
            View All →
          </Link>
        </div>

        <TransactionTable
          transactions={transactions.slice(0, 5)} 
          role={role}
          onDelete={deleteTransaction}
        
        />
      </div>

    
      <div className="p-4 rounded-2xl shadow-md">
        <Insights />
      </div>

    </div>
  );
};

export default Dashboard;