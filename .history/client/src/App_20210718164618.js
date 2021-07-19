import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './components/Layout/Navbar';
import  {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NotFound from './components/pages/NotFound';
import Playlist from './components/pages/Playlist';
import Category from './components/pages/Category';


//Using Router and switch for switching between my components

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path = "/album" component={Album}/>
        <Route exact path = "/playlist" component={Playlist}/>
        <Route exact path = "/categories" component={Category}/>
        <Route component = {NotFound}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
