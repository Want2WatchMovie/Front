import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Ticketing from "./pages/Ticketing";
import Home from "./pages/Home";
import Admin from "./pages/Admin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/ticketing" element={<Ticketing />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default App;
