import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Signup from './components/Singup';
import Login from './components/Login';
import { Routes,Route } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer,toast } from 'react-toastify';
import PrivateRoute from './components/PrivateRoute';

function App() {
    const [isLoggedIn, setIsLoggedIn]=useState(false);

  return (
    <div className=' h-screen w-screen bg-black flex flex-col'>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path='/dashboard' element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashboard/>
          </PrivateRoute>
          }/>

      </Routes>
    </div>
  );
}

export default App;
