import { useAppContext } from "../../context/AppContext";
import useThemeStyles from "../../hook/useStyles";
const Insights = () => {
  const {
    getTotalIncome,
    getTotalExpense,
    getBalance,
    transactions,
  } = useAppContext();

  const styles = useThemeStyles();

  const income = getTotalIncome();
  const expense = getTotalExpense();
  const balance = getBalance();
  const totalTx = transactions.length;

  return (
    <div className={`p-4 rounded-2xl shadow-md space-y-3 ${styles.card}`}>

      <h2 className="text-lg font-semibold">
        Quick Insights
      </h2>

      <div className="flex justify-between text-sm">
        <span className={styles.subText}>Total Transactions</span>
        <span>{totalTx}</span>
      </div>

      <div className="flex justify-between text-sm">
        <span className={styles.subText}>Income</span>
        <span className={styles.income}>₹ {income}</span>
      </div>

      <div className="flex justify-between text-sm">
        <span className={styles.subText}>Expense</span>
        <span className={styles.expense}>₹ {expense}</span>
      </div>

      <div className={`flex justify-between text-sm font-medium border-t pt-2 ${styles.border}`}>
        <span className={styles.subText}>Balance</span>
        <span
          className={
            balance >= 0 ? styles.income : styles.expense
          }
        >
          ₹ {balance}
        </span>
      </div>

    </div>
  );
};

export default Insights;