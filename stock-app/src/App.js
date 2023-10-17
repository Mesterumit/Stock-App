import {Routes, Route} from 'react-router-dom';
import {Login} from './pages/Login'
import Register from './pages/Register'
import Layout from './components/Layout/Layout'
import Dashboard from './pages/Dashboard'
import { Brands } from './pages/Brands';
import Firms from './pages/Firms';
import Products from './pages/Products';
import Sales from './pages/Sales';
import Categories from './pages/Categories';
import Purchases from './pages/Purchases';
import Profile from './pages/Profile';
import PrivateRouter from './PrivateRouter';

const App=()=> {
  return (
  
    
    
    <Routes>
      <Route path='/' element={<Login />}  />
      <Route path='/register' element={<Register />} />

      <Route path='/stock' element={<PrivateRouter />} >
     <Route path="/stock" element={<Layout />} >
     <Route path='dashboard'element={<Dashboard/>} />
     <Route path='brands' element={<Brands />} />
     <Route path='firms' element={<Firms />} />
     <Route path='products' element={<Products />} />
     <Route path='sales' element={<Sales/>}/>
     <Route path='categories' element={<Categories />} />
     <Route path='profile' element={<Profile />} />
     <Route path='purchases' element={<Purchases />} />
     </Route>
        </Route>
    </Routes>
    

    
  );
}

export default App;
