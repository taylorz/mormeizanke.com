import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import './styles/styles.scss';
import Nav from './components/Nav/Nav';
import Homepage from './pages/Homepage/Homepage';
import About from './pages/About/About';
import './App.css';

const App = () => {
    return (
      <div className="App" >
        <Nav/>
        <Router>
          <Route exact path="/" component={Homepage}/>
          <Route path="/about" component={About}/>
        </Router>
      </div>
    );
}

export default App;
