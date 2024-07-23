import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import PropertyPage from "./pages/PropertyPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/"></Route>
        <Route element={<About />} path="/about"></Route>
        <Route element={<PropertyPage />} path="/property/:id"></Route>
      </Routes>
    </div>
  );
}

export default App;
