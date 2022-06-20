import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/user/Login";
import SolList from "./components/SolList";
import Signup from "./components/user/Signup";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="list" element={<SolList />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
