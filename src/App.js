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
        <Route path='/Profile' element={route === 'authenticated' || route === 'idle'? <Profile /> : <SignIn />} />
        <Route path='/SignIn' element={route === 'authenticated' || route === 'idle'? <Navigate to='/' /> : <SignIn />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/AdminControls' element={route === 'authenticated'|| route === 'idle'? <AdminControls /> : <Navigate to='/' />} />
        <Route path='/DiscountCodes' element={route === 'authenticated'|| route === 'idle'? <AddDiscountCodes /> : <Navigate to='/' />} />
        <Route path='/ModifyItems' element={route === 'authenticated' || route === 'idle'? <ModifyItems /> : <Navigate to='/' />} />
        <Route path='/ModifyUsers' element={route === 'authenticated' || route === 'idle'? <ModifyUsers /> : <Navigate to='/' />} />
        <Route path='/HistoryOfOrders' element={route === 'authenticated' || route === 'idle'? <HistoryOfOrders /> : <Navigate to='/' />} />
        <Route path='/AddItemsTests' element={route === 'authenticated' || route === 'idle'? <AddItemsTest /> : <Navigate to='/' />} />
        <Route path='/AddDiscountCodes' element={route === 'authenticated' || route === 'idle'? <AddDiscountCodes /> : <Navigate to='/' />} />

      </Routes>
    </Router>
  );

}
//testset


export default App;