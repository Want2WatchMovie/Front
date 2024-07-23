import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Ticketing from "./pages/Ticketing";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/ticketing" element={<Ticketing />} />
    </Routes>
  );
}

export default App;
