import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from "./routes/Home";
import Work from "./routes/Work";
import Projects from "./routes/Projects";
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </>
  );
}
export default App;