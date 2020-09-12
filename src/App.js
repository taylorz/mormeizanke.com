import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, withRouter} from "react-router-dom";
import './styles/styles.scss';
import Homepage from './pages/Homepage/Homepage';
import About from './pages/About/About';
import './App.css';

class ScrollToTop extends Component {
  constructor(props) {
    super(props)
    const { history } = props
     this.unlisten = history.listen((location, action) => {
       // Scroll window to top
       window.scrollTo(0, 0)
       // setTimeout(() => window.scrollTo(0, 0), 10)
     })
  }
   componentWillUnmount() {
     this.unlisten()
   }

  render() {
    return this.props.children || null;
  }
}

const RouterScroll = withRouter(props => <ScrollToTop {...props} />)

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Router>
          <RouterScroll />
            <Route exact path="/" component={Homepage}/>
            <Route path="/about" component={About}/>
        </Router>
      </div>
    );
  }
}

export default App;
