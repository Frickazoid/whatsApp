import './App.css';
import MainWindow from "./components/MainWindow";
import './style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <MainWindow/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
