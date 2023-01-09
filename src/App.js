import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from "./routes/Home";
import Resume from "./routes/Resume";
import Projects from "./routes/Projects";
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </>
  );
}
export default App;