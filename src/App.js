import React from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
// import Nav from './components/Nav/Nav'
import './styles/styles.scss';
import Homepage from './pages/Homepage/Homepage';
import Poetry from './pages/Poetry/Poetry';
import Essays from './pages/Essays/Essays';
import Podcasts from './pages/Podcasts/Podcasts';
import Reviews from './pages/Reviews/Reviews';
import Drawings from './pages/Drawings/Drawings';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import './App.css';

const App = () => {
    return (
      <div className="App" >
        <Router>
          <Route exact path="/" component={Homepage}/>
          <Route path="/poetry" component={Poetry}/>
          <Route path="/essays" component={Essays}/>
          <Route path="/podcasts" component={Podcasts}/>
          <Route path="/reviews" component={Reviews}/>
          <Route path="/drawings" component={Drawings}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
        </Router>
      </div>
    );
}

export default App;
