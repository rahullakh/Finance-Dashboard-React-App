import dayjs from "dayjs";
import useThemeStyles from "../../hook/useStyles";

const MonthlyComp = ({ transactions }) => {
  const styles = useThemeStyles();

  const currentMonth = dayjs().month();
  const prevMonth = dayjs().subtract(1, "month").month();

  let currentExpense = 0;
  let prevExpense = 0;

  transactions.forEach((tx) => {
    const txMonth = dayjs(tx.date).month();

    if (tx.type === "expense") {
      if (txMonth === currentMonth) currentExpense += tx.amount;
      if (txMonth === prevMonth) prevExpense += tx.amount;
    }
  });

  const difference = currentExpense - prevExpense;
  const isIncrease = difference > 0;

  return (
    <div
      className={`p-4 sm:p-5 lg:p-6 rounded-xl shadow transition-all hover:shadow-lg ${styles.card}`}
    >

      <h2 className="text-base sm:text-lg lg:text-xl font-semibold mb-4">
        Monthly Comparison
      </h2>

      <div className="flex flex-col gap-3">

     
        <div className="flex justify-between items-center">
          <span className={`text-sm sm:text-base ${styles.subText}`}>
            This Month
          </span>
          <span className={`text-lg sm:text-xl font-bold ${styles.expense}`}>
            ₹{currentExpense}
          </span>
        </div>

       
        <div className="flex justify-between items-center">
          <span className={`text-sm sm:text-base ${styles.subText}`}>
            Last Month
          </span>
          <span className={`text-lg sm:text-xl font-bold ${styles.mutedText}`}>
            ₹{prevExpense}
          </span>
        </div>

      </div>

      <div className={`my-4 border-t ${styles.border}`}></div>

    
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">

        <span className={`text-sm sm:text-base ${styles.subText}`}>
          Difference
        </span>

        <span
          className={`text-sm sm:text-base font-semibold ${
            isIncrease ? styles.expense : styles.income
          }`}
        >
          {isIncrease ? "↑ Increased" : "↓ Decreased"} by ₹
          {Math.abs(difference)}
        </span>

      </div>

    </div>
  );
};

export default MonthlyComp;