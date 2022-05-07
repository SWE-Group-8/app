import './App.css';
import Navbar from './components';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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

import AddItemsTest from './pages/AddItemsTest';
import AddDiscountCodes from "./pages/AddDiscountCodes";
import { useAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function App() {
  const { route, error, signOut } = useAuthenticator(context => [context.route]);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<AboutTemp />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/Profile' element={route === 'authenticated' ? <Profile /> : <SignIn />} />
        <Route path='/SignIn' element={route === 'authenticated' ? <Navigate to='/' /> : <SignIn />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/AdminControls' element={route === 'authenticated' ? <AdminControls />:  <Navigate to='/' />} />
        <Route path='/DiscountCodes' element={<DiscountCodes />} />
        <Route path='/ModifyItems' element={<ModifyItems />} />
        <Route path='/ModifyUsers' element={<ModifyUsers />} />
        <Route path='/HistoryOfOrders' element={<HistoryOfOrders />} />
        <Route path='/AddItemsTests' element={<AddItemsTest />} />
        <Route path='/AddDiscountCodes' element={<AddDiscountCodes />} />

      </Routes>
    </Router>
  );

}
//testset


export default App;