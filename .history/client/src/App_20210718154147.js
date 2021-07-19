import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Landing from './components/pages/Landing';
import Navbar from './components/Layout/Navbar';
import  {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NotFound from './components/pages/NotFound';
import EditAgent from './components/pages/EditAgent';
import Agent from './components/pages/Agent';
import Album from './components/pages/Album';

//Using Router and switch for switching between my components

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path = "/album" component={Album}/>
        <Route exact path = "/playlist" component={EditAgent}/>
        <Route exact path = "/categories" component={Agent}/>
        <Route component = {NotFound}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
