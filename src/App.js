import "./App.css";
import Home from "./page/Home";
import Nav from "./components/Nav";
import About from "./page/About";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
