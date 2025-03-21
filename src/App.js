import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes,Outlet } from 'react-router-dom';
import Bangalorepg from './Bang';
import ChennaiPg from './Chennai';
import Cbepg from './Cbe';
import MumbaiPg from './Mumbai';
import { Buypage } from './Buypage';
import { Seating } from './Seatselect';
import { Ticket } from './Ticketslect';
import { Login } from './Login';
import ProtectedRoute from './Loginprotect';
import { Cart } from './Cart';
import { TotalAmountProvider } from './Cartcontext'; 
import { Ogamount } from './Ticketslect';
import { Profile } from './Profile';
import Payment from './Payment';
import Dashboard from './AdminDashboard';
import AdminLogin from './Adminlogin';
import StaticComponent from './Admincategories';
import ProductManagement from './Adminprod';
import AdminLayout from './Adminlayout';
import { AdminProtect } from './Adminprotect';
import { Navcomponent } from './Navbar';
import { useLocation } from "react-router-dom";
import { Eventdetails } from './Buypage';



const App = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");
  return(
<>
{!isAdminRoute && <Navcomponent />} {/* Hide Nav for admin routes */}
<Ogamount value={0}>
  <TotalAmountProvider value={0}>
    <Eventdetails>
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Cbepg />} />
      <Route path="/coimbatore" element={<Cbepg />} />
      <Route path="/Bangalore" element={<Bangalorepg />} />
      <Route path="/chennai" element={<ChennaiPg />} />
      <Route path="/mumbai" element={<MumbaiPg />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/buynow" element={<Buypage />} />
      <Route path="/coimbatore/buynow" element={<Buypage />} />
      <Route path="/coimbatore/buynow/selectseat" element={<Seating />} />
      <Route path="/coimbatore/buynow/selectseat/ticket" element={<Ticket />} />
      
      {/* Protected User Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
      </Route>

      {/* Admin Routes */}
      <Route path="/adminlogin" element={<AdminLogin />} />
      <Route element={<AdminProtect />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="categories" element={<StaticComponent />} />
          <Route path="products" element={<ProductManagement />} />
        </Route>
      </Route>
    </Routes>
    </Eventdetails>
  </TotalAmountProvider>
</Ogamount>
<Outlet />
    </>
)};



export default App;
