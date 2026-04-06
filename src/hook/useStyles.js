import { useTheme } from "../context/ThemeContext";

const useThemeStyles = () => {
  const { theme } = useTheme();

  const isLight = theme === "light";
  const isDark = theme === "dark";
  const isAurora = theme === "aurora";

  return {
    
    card: isLight
      ? "bg-white text-black"
      : isDark
      ? "bg-gray-800 text-white"
      : "bg-white/10 backdrop-blur-md text-white border border-white/20",

  
    input: isLight
      ? "bg-white text-black border-gray-300"
      : isDark
      ? "bg-gray-700 text-white border-gray-600"
      : "bg-white/10 text-white border-white/20 placeholder-white/60",


    text: isLight ? "text-black" : "text-white",

    subText: isLight ? "text-gray-500" : "text-gray-300",

    mutedText: isLight ? "text-gray-400" : "text-gray-400",


    income: isAurora ? "text-green-400" : "text-green-600",

    expense: isAurora ? "text-red-400" : "text-red-500",

    savings: isAurora ? "text-blue-400" : "text-blue-600",

    warning: isAurora ? "text-yellow-300" : "text-yellow-600",


    incomeBg: isAurora ? "bg-green-400/10" : "bg-green-50",

    expenseBg: isAurora ? "bg-red-400/10" : "bg-red-50",

    warningBg: isAurora ? "bg-yellow-300/10" : "bg-yellow-50",

    
    border: isAurora ? "border-white/20" : "border-gray-300",

 
    primaryBtn: isAurora
      ? "bg-gradient-to-r from-cyan-500 via-purple-500 to-teal-500"
      : "bg-blue-500",

    dangerBtn: "bg-gradient-to-r from-red-500 via-rose-500 to-pink-500 text-white",

    link: isAurora ? "text-cyan-400" : "text-blue-500",

 
    glass: "bg-white/10 backdrop-blur-md border border-white/20",
  };
};

export default useThemeStyles;