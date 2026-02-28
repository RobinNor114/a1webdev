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

{/*******************************************************************************************
  File: App.js 

  Programmer: Robin Wagubi

  First Version: 26/02/26

  Description: Sets up routing and renders the Navbar and pages.
  (Put this at the bottom because apparantly the imports have to be on line 1 or I get an error)

  ***************************************************************************************/}