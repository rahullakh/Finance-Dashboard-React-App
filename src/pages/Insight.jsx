import { useAppContext } from "../context/AppContext";
import SummaryCard from "../components/cards/SummaryCard";
import { FaArrowUp, FaArrowDown, FaWallet } from "react-icons/fa";
import Category from "../components/insights/Category"
import MonthlyComp from "../components/insights/MonthlyComp";
import Observations from "../components/insights/Observations"

const Insights = () => {
   const { getTotalIncome, getTotalExpense, getBalance, transactions } =
    useAppContext();

  const summaryData = [
    {
      title: "Total Income",
      amount: getTotalIncome(),
      icon: <FaArrowUp />,
      color: "bg-green-100 text-green-700",
    },
    {
      title: "Total Expense",
      amount: getTotalExpense(),
      icon: <FaArrowDown />,
      color: "bg-red-100 text-red-700",
    },
    {
      title: "Balance",
      amount: getBalance(),
      icon: <FaWallet />,
      color: "bg-blue-100 text-blue-700",
    },
  ];
  return (
    <div className="p-4 sm:p-6 lg:p-8  min-h-screen">
      
    
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6">
         Insights
      </h1>

     
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
        {summaryData.map((item, index) => (
          <SummaryCard key={index} {...item} />
        ))}
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-5">
        
        
          <Category transactions={transactions} />
        
          <MonthlyComp transactions={transactions} />
      
          <Observations  />
        

      </div>

    </div>
  );
};

export default Insights;