import './App.css';
import { Routes, Route } from "react-router-dom" 
import Menu from './components/Menu/Menu.js';
import Home from './routes/Home/Home.js';
import Login from './routes/Login/Login.js';



function App() {
  return (
    <div className="App">
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login />} />
      </Routes>
      <Menu />
    </div>
  );
}

export default App;
