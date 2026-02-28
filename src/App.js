import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/nav";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
export default App;
