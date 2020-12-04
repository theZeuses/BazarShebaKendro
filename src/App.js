import { BrowserRouter as Router , Switch, Route }  from 'react-router-dom';
import './App.css';
import AdminSideMenu from './component/AdminSideMenu';

function App() {
  return (
    <Router>
      <div className="App">      
        <Switch>
          <route path="/admin/profile">
            <AdminSideMenu component="AdminProfile"/>
          </route>
          <route path="/inventory/dashboard">
            <AdminSideMenu component="InventoryDashboard"/>
          </route>
          <route path="/product/input">
            <AdminSideMenu component="ProductInput"/>
          </route>
          <route path="/product/list">
            <AdminSideMenu component="ProductList"/>
          </route>
          <route path="/farmer/register">
            <AdminSideMenu component="FarmerRegistration"/>
          </route>
          <route path="/farmer/list">
            <AdminSideMenu component="FarmerList"/>
          </route>
          <route path="/login">
            <AdminSideMenu component="login"/>
          </route>
          <route path="/">
            <AdminSideMenu />
          </route>
        </Switch>
      </div>
    </Router>          
  );
}

export default App;
