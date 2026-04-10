import { useAppContext } from "../../context/AppContext";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import useThemeStyles from "../../hook/useStyles";
import { useTheme } from "../../context/ThemeContext";

const PieChartComponent = () => {
  const { getTotalIncome, getTotalExpense } = useAppContext();
  const styles = useThemeStyles();
  const { theme } = useTheme();

  const income = getTotalIncome();
  const expense = getTotalExpense();

  const data = [
    { name: "Income", value: income },
    { name: "Expense", value: expense },
  ];


  const COLORS =
    theme === "aurora"
      ? ["#4ade80", "#f87171"]
      : ["#22c55e", "#ef4444"];

  const labelColor =
    theme === "light" ? "#374151" : "#e5e7eb";

  const tooltipStyle =
    theme === "aurora"
      ? {
          backgroundColor: "rgba(0,0,0,0.7)",
          border: "1px solid rgba(255,255,255,0.2)",
          color: "#fff",
        }
      : {};

  return (
    <div className={`${styles.card} p-4 sm:p-5 rounded-2xl shadow-md w-full h-[300px] sm:h-[350px]`}>

      <h2 className={`text-base sm:text-lg font-semibold mb-3 ${styles.text}`}>
        Income vs Expense
      </h2>

      <div className="w-full h-[300px] pb-4">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>

            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius="70%"
              dataKey="value"
              nameKey="name"
              label={({ name, percent }) =>
                `${name} (${(percent * 100).toFixed(0)}%)`
              }
              labelLine={false}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>

            <Tooltip contentStyle={tooltipStyle} />

            <Legend wrapperStyle={{ color: labelColor }} />

          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PieChartComponent;