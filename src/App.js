import React from 'react';
import './App.css';
import Navbar from './components';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import About from './pages/about';
import AboutTemp from './pages/aboutTemp';
import Cart from './pages/cart';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Inventory from './pages/Inventory';
import AdminControls from './pages/AdminControls';
import DiscountCodes from './pages/DiscountCodes';
import AddItems from './pages/AddItems';
import HistoryOfOrders from './pages/HistoryOfOrders';
import ModifyItems from './pages/ModifyItems';
import ModifyUsers from './pages/ModifyUsers';
import PlacedOrders from './pages/PlacedOrders';
import AddItemsTest from './pages/AddItemsTest';
import AddDiscountCodes from "./pages/AddDiscountCodes";
import { useAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import {Amplify} from "aws-amplify";

//import Amplify from "aws-amplify";
//import {AmplifyAuthenticator, AmplifySignOut} from '@aws-amplify/ui-react'
import awsExports from "./use-this-aws-exports"
Amplify.configure(awsExports);


function App() {

  const { route, error, signOut } = useAuthenticator(context => [context.route]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Inventory/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/cart' element={<Cart/>} />//i want this an image and moved to the right of the navbar
        <Route path='/Profile' element={<Profile/>} />
        <Route path='/SignIn' element={route === 'authenticated' ? <Navigate to='/' /> : <SignIn/>} />
        <Route path='/SignUp' element={<SignUp/>} />
        <Route path='/AdminControls' element={<AdminControls/>} />
        <Route path='/DiscountCodes' element={<DiscountCodes/>} />
        <Route path='/AddItems' element={<AddItems/>} />
        <Route path='/ModifyItems' element={<ModifyItems/>} />
        <Route path='/ModifyUsers' element={<ModifyUsers/>} />
        <Route path='/PlacedOrders' element={<PlacedOrders/>} />
        <Route path='/HistoryOfOrders' element={<HistoryOfOrders/>} />
        <Route path='/aboutTemp' element={<AboutTemp/>} />
        <Route path='/AddItemsTests' element={<AddItemsTest/>} />
        <Route path='/AddDiscountCodes' element={<AddDiscountCodes/>} />
      </Routes>
    </Router>
  );
}
//testset


export default App;