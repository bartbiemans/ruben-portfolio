import React from 'react';
import './App.css';
import {Navbar} from "./components/nav/Navbar";
import {HomePage} from "./main/home/HomePage";
import {Route, Router, Switch} from 'react-router';
import {AboutPage} from "./main/about/AboutPage";
import {createBrowserHistory} from 'history';
import {Illustrations} from "./main/illustrations/Illustrations";

const browserHistory = createBrowserHistory();


function App() {
  return (

      <div className="App">
        <Router history={browserHistory}>
          {renderRouting()}
        </Router>
    </div>
  );
}

const renderRouting = () => {
  return(
      <>
          <Navbar/>
        <Switch>
          <Route exact path={'/about'} component={AboutPage}/>
          <Route exact path={'/illustrations'} component={Illustrations}/>
          <Route exact path={'/'} component={HomePage}/>
        </Switch>
        </>
  )
}

export default App;
