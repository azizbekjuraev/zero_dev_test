import "./App.css";
import Graph from "./components/Graph";

export default function App() {
  return (
    <div className="App">
      <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800">
        <h1 className="text-xl p-8 mb-10 bg-slate-800 text-white rounded">
          Личный финансовый учет
        </h1>
        {/* grid columns */}
        <div className="grid md:grid-cols-2 gap-4"></div>
        {/* Chart */}
        <Graph></Graph>
        {/* Form */}
      </div>
    </div>
  );
}
