import {BrowserRouter,Routes,Route} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Insight from "./pages/Insight";
import Setting from "./pages/Setting";
function App() {


  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element = {<Layout></Layout>}>
         <Route index element={<Dashboard />} />
         <Route path="transactions" element={<Transactions />} />
         <Route path="insights" element={<Insight />} />
         <Route path="settings" element={<Setting />} />
      </Route>
     </Routes>
    </BrowserRouter>
  )
}

export default App
