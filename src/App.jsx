import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Birthday from "./pages/Birthday";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/birthday" element={<Birthday />} />
      </Routes>
    </Router>
  );
}
