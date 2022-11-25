import { Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import CombinationComponent from "./CombinationComponent";
import Example from "./IOS";
import QeaTropy from "./QeaTropy";




import Menu from "./Menu";


function App() {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/" element={<CombinationComponent/>} />
        <Route path="//iosApp" element={<Example/>} />
        <Route path="/qeaTropy"  element={<QeaTropy/>}/>
        

      </Routes>
      
      
      
    </div>
  );
}

export default App;
