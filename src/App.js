import "./App.css";
import Home from "./page/Home";
import Nav from "./components/Nav";
import About from "./page/About";
import Blog from "./page/Blog";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
