import "./App.css";
import Graph from "./components/Graph";
import Form from "./components/Form";

export default function App() {
  return (
    <div className="App">
      <div className="container mx-auto  text-center drop-shadow-lg text-gray-800">
        <h1 className="text-xl p-8 mb-10 bg-slate-800 text-white ">
          Личный финансовый учет
        </h1>
        {/* grid columns */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* Chart */}
          <Graph></Graph>
          {/* Form */}
          <Form></Form>
        </div>
      </div>
    </div>
  );
}
