import { useAppContext } from "../../context/AppContext";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { useTheme } from "../../context/ThemeContext";
import useThemeStyles from "../../hook/useStyles";
const LineChartComponent = () => {
  const { transactions } = useAppContext();
  console.log(transactions);
  
  const { theme } = useTheme();
  const styles = useThemeStyles();

  const groupedData = transactions.reduce((acc, curr) => {
    const existing = acc.find((item) => item.name === curr.title);
    
    if (existing) {
      if (curr.type === "income") {
        existing.income += Number(curr.amount);
      } else {
        existing.expense += Number(curr.amount);
      }
    } else {
      acc.push({
        name: curr.title,
        income: curr.type === "income" ? Number(curr.amount) : 0,
        expense: curr.type === "expense" ? Number(curr.amount) : 0,
      });
    }

    return acc;
  }, []);

  const data =
    groupedData.length > 0
      ? groupedData
      : [
          { name: "Jan", income: 4000, expense: 2400 },
          { name: "Feb", income: 3000, expense: 1398 },
          { name: "Mar", income: 5000, expense: 3200 },
        ];

  
  const axisColor =
    theme === "light" ? "#374151" : "#e5e7eb";

  const gridColor =
    theme === "aurora" ? "#ffffff20" : "#e5e7eb";

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
        Income vs Expense Trend
      </h2>

      <div className="w-full h-[300px] pb-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>

            <CartesianGrid stroke={gridColor} strokeDasharray="3 3" />

            <XAxis dataKey="name" stroke={axisColor} />
            <YAxis stroke={axisColor} />

            <Tooltip contentStyle={tooltipStyle} />
            <Legend />

            <Line
              type="monotone"
              dataKey="income"
              stroke="#22c55e"
              strokeWidth={2}
            />

            <Line
              type="monotone"
              dataKey="expense"
              stroke="#ef4444"
              strokeWidth={2}
            />

          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineChartComponent;