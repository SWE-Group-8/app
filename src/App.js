import React from 'react';
import './App.css';
import Navbar from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Cart from './pages/cart';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import MensShirts from './pages/MensShirts';
import MensShorts from './pages/MensShorts';
import MensPants from './pages/MensPants';
import MensShoes from './pages/MensShoes';
import WomensShirts from './pages/WomensShirts';
import WomensShorts from './pages/WomensShorts';
import WomensPants from './pages/WomensPants';
import WomensShoes from './pages/WomensShoes';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/cart' element={<Cart/>} />//i want this an image and moved to the right of the navbar
        <Route path='/Profile' element={<Profile/>} />
        <Route path='SignIn' element={<SignIn/>} />
        <Route path='SignUp' element={<SignUp/>} />
        <Route path='MensShirts' element={<MensShirts/>} />
        <Route path='MensPants' element={<MensPants/>} />
        <Route path='MensShorts' element={<MensShorts/>} />
        <Route path='MensShoes' element={<MensShoes/>} />
        <Route path='WomensShirts' element={<WomensShirts/>} />
        <Route path='WomensPants' element={<WomensPants/>} />
        <Route path='WomensShorts' element={<WomensShorts/>} />
        <Route path='WomensShoes' element={<WomensShoes/>} />
      </Routes>
    </Router>
  );
}
//testset
  
export default App;