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

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Allitem} />
        <Route path='/allitem' component={Allitem} />
        <Route path='/topup' component={Topup} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/qrcode' component={Qrcodepay}/>
        <Route path='/truemoney' component={Truemoneypay}/>
        <Route path='/valorant' component={Valorant} />
        <Route path='/apex' component={Apex}/>
      </Switch>
    </Router>
  );
}

export default App;
