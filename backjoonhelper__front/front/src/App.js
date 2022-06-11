import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import SolList from "./components/SolList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="list" element={<SolList />} />
      </Routes>
    </div>
  );
}

export default App;
