import useThemeStyles from "../../hook/useStyles";

const Category = ({ transactions }) => {
  const styles = useThemeStyles();

  const expenseData = transactions.filter((t) => t.type === "expense");

  const categoryMap = {};

  expenseData.forEach((tx) => {
    categoryMap[tx.category] =
      (categoryMap[tx.category] || 0) + tx.amount;
  });

  const sortedCategories = Object.entries(categoryMap).sort(
    (a, b) => b[1] - a[1]
  );

  const highestCategory = sortedCategories[0];

  return (
    <div
      className={`p-4 sm:p-5 lg:p-6 rounded-xl shadow transition-all hover:shadow-lg ${styles.card}`}
    >

      <h2 className="text-base sm:text-lg lg:text-xl font-semibold mb-4">
        Highest Spending Category
      </h2>

      {highestCategory ? (
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">

          <span className={`text-sm sm:text-base ${styles.subText}`}>
            {highestCategory[0]}
          </span>

          <span
            className={`text-lg sm:text-xl font-bold ${styles.expense}`}
          >
            ₹{highestCategory[1]}
          </span>

        </div>
      ) : (
        <p className={`text-sm sm:text-base ${styles.mutedText}`}>
          No expense data available
        </p>
      )}

      {sortedCategories.length > 1 && (
        <div className="mt-4 space-y-2">
          {sortedCategories.slice(1, 3).map(([cat, amt]) => (
            <div
              key={cat}
              className={`flex justify-between text-sm ${styles.subText}`}
            >
              <span>{cat}</span>
              <span>₹{amt}</span>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};

export default Category;