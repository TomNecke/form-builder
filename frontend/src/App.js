import './App.css';
import { Routes, Route } from "react-router-dom" 
import Menu from './components/Menu/Menu.js';
import Home from './routes/Home/Home.js';
import Login from './routes/Login/Login.js';
import CloseMenu from './components/CloseMenu/CloseMenu.js';
import { useContext } from 'react';
import { Context } from './context/Context.js';


function App() {

  const {menu} = useContext(Context)

  return (
    <div className="App">
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login />} />
      </Routes>
      {menu && <CloseMenu />}
      <Menu />
    </div>
  );
}

export default App;
