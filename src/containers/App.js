import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from '../components/LandingPage/LandingPage'
import Signin from '../components/Signin/Signin'
import Signup from '../components/Signup/Signup'
import Homepage from '../components/Homepage/Homepage'
import Favorites from '../components/Favorites/Favorites'
import 'tachyons'
import {GlobalProvider} from '../components/context/GlobalState'


function App() {

  return (
    <GlobalProvider>
      <Router basename={"/devflixproject"}>
        <div>
          <Switch>
            <Route path="/" exact component={LandingPage}/>
            <Route path="/signin" exact component={Signin}/>
            <Route path="/signup" exact component={Signup}/>
            <Route path="/homepage" exact component={Homepage}/>
            <Route path="/favorites" exact component={Favorites}/>
          </Switch>
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
