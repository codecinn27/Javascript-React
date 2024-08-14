import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import Register from './pages/Auth/Register';
import Signin from './pages/Auth/Signin';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/signin' element={<Signin/>}/>
      </Routes>
      <ToastContainer position='top-center' />
    </Router>
  );
}

export default App;
