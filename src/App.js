import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from './pages/register';
import Allitem from './pages/allitem';
import Topup from './pages/topup';
import Login from './pages/login';
import Qrcodepay from './pages/qrcode';
import Truemoneypay from './pages/truemoney';
import Valorant from './pages-games/valorant';
import Apex from './pages-games/apex';
import Rov from './pages-games/rov';
import Roblox from './pages-games/roblox';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Allitem} />
        <Route path='/allitem' exact component={Allitem} />
        <Route path='/topup' exact component={Topup} />
        <Route path='/register' exact component={Register} />
        <Route path='/login' exact component={Login} />
        <Route path='/qrcode' exact component={Qrcodepay}/>
        <Route path='/truemoney' exact component={Truemoneypay}/>
        <Route path='/valorant' exact component={Valorant} />
        <Route path='/apex' exact component={Apex}/>
        <Route path='/rov' exact component={Rov}/>
        <Route path='/roblox' exact component={Roblox}/>
      </Switch>
    </Router>
  );
}

export default App;
