import { useAppContext } from "../../context/AppContext";
import useThemeStyles from "../../hook/useStyles";
const Observations = () => {
  const { getTotalIncome, getTotalExpense } = useAppContext();
  const styles = useThemeStyles();

  const income = getTotalIncome();
  const expense = getTotalExpense();
  const savings = income - expense;

  let message = "";
  let messageColor = "";
  let messageBg = "";


  if (expense > income) {
    message = "Your expenses are higher than income";
    messageColor = styles.expense;
    messageBg = styles.expenseBg;
  } else if (savings > 10000) {
    message = "Great! You are saving well";
    messageColor = styles.income;
    messageBg = styles.incomeBg;
  } else {
    message = "Your finances are balanced";
    messageColor = styles.warning;
    messageBg = styles.warningBg;
  }

  return (
    <div
      className={`p-4 sm:p-5 lg:p-6 rounded-xl shadow transition-all ${styles.card}`}
    >

      <h2 className="text-base sm:text-lg lg:text-xl font-semibold mb-4">
        Observations
      </h2>

      <div className={`p-3 rounded-lg ${messageBg}`}>
        <p className={`text-sm sm:text-base lg:text-lg font-medium ${messageColor}`}>
          {message}
        </p>
      </div>


      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">

        <div className={`rounded-lg p-2 shadow-sm ${styles.card}`}>
          <p className={`text-xs sm:text-sm ${styles.subText}`}>Income</p>
          <p className={`font-semibold text-sm sm:text-base ${styles.income}`}>
            ₹{income}
          </p>
        </div>

        <div className={`rounded-lg p-2 shadow-sm ${styles.card}`}>
          <p className={`text-xs sm:text-sm ${styles.subText}`}>Expense</p>
          <p className={`font-semibold text-sm sm:text-base ${styles.expense}`}>
            ₹{expense}
          </p>
        </div>

        <div className={`rounded-lg p-2 shadow-sm ${styles.card}`}>
          <p className={`text-xs sm:text-sm ${styles.subText}`}>Savings</p>
          <p className={`font-semibold text-sm sm:text-base ${styles.savings}`}>
            ₹{savings}
          </p>
        </div>

      </div>
    </div>
  );
};

export default Observations;