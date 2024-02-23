import "./App.css";
import Graph from "./components/Graph";
import Form from "./components/Form";
import Expense from "./components/Expense";
import Income from "./components/Income";
import Savings from "./components/Savings";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
export default function App() {
  return (
    <Router>
      <div className="App">
        <div className="container mx-auto  text-center drop-shadow-lg text-gray-800">
          <Link to="/">
            <h1 className="text-xl p-8 mb-10 bg-slate-800 text-white ">
              Личный финансовый учет
            </h1>
          </Link>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <div className="grid md:grid-cols-2 gap-4">
                  <Graph /> <Form />
                </div>
              }
            />
            <Route exact path="/Расход" element={<Expense />} />
            <Route exact path="/Доход" element={<Income />} />
            <Route exact path="/Экономия" element={<Savings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
