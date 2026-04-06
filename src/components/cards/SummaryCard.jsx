
import useThemeStyles from "../../hook/useStyles";
const SummaryCard = ({ title, amount, icon }) => {
  
  const styles = useThemeStyles();
  
   const getColor = () => {
    if (title.toLowerCase().includes("income")) return styles.income;
    if (title.toLowerCase().includes("expense")) return styles.expense;
    return styles.savings;
  };

  return (
    <div
      className={`p-4 sm:p-5 rounded-2xl shadow-md flex flex-col justify-between 
      transition hover:scale-[1.02] ${styles.card}`}
    >
      <div className="flex justify-between items-center">
        
        <h3 className={`text-sm sm:text-base font-medium ${styles.subText}`}>
          {title}
        </h3>

        <span className={`text-xl sm:text-2xl ${getColor()}`}>
          {icon}
        </span>
      </div>

      <h2
        className={`text-xl sm:text-2xl md:text-3xl font-bold mt-2 ${getColor()}`}
      >
        ₹ {amount}
      </h2>
    </div>
  );
};

export default SummaryCard;