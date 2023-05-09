import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from "./routes/Home";
import Resume from "./routes/Resume";
import Collaborations from "./routes/Collaborations";
import Navbar from './Navbar/Navbar';
import Coffee from "./routes/Coffee"
import CoffeeMods from "./routes/CoffeeMods"
import TeaProcess from "./routes/TeaNotes/TeaProcess"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Collaborations" element={<Collaborations />} />
        <Route path="/Coffee" element={<Coffee/>}/>
        <Route path="/CoffeeMods" element={<CoffeeMods/>}/>
        <Route path="/TeaProcess" element={<TeaProcess/>}/>
      </Routes>
    </>
  );
}
export default App;