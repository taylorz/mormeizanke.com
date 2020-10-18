import React, { Component, useState, useEffect }  from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Grid from '@material-ui/core/Grid';
import AppWrapper from './components/AppWrapper/AppWrapper'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import Homepage from './pages/Homepage/Homepage';
import Poetry from './pages/Poetry/Poetry';
import Essays from './pages/Essays/Essays';
import Podcasts from './pages/Podcasts/Podcasts';
import Reviews from './pages/Reviews/Reviews';
import Drawings from './pages/Drawings/Drawings';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import createHistory from 'history/createBrowserHistory'

const routes = [
  { path: '/', name: 'Home', Component: Homepage },
  { path: '/about', name: 'About', Component: About },
  { path: '/contact', name: 'Contact', Component: Contact },
  { path: '/poetry', name: 'Poetry', Component: Poetry },
  { path: '/essays', name: 'Essays', Component: Essays },
  { path: '/podcasts', name: 'Podcasts', Component: Podcasts },
  { path: '/reviews', name: 'Reviews', Component: Reviews },
  // { path: '/drawings', name: 'Drawings', Component: Drawings },
]


const history = createHistory()
export default () => {
  return(
    <Router history={history}>
      <AppWrapper>
        <Grid container>
          <Grid item xs={12} sm={2}>
            <Nav/>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Route
              render={({ location }) => {
              const {key} = location

                return(
                  <TransitionGroup component={null}>
                      <CSSTransition
                      key={key}
                      appear={true}
                      classNames="my-node"
                      timeout={{enter: 1500, exit: 500}}
                      >
                      <Switch location={location}>
                        {routes.map(({ path, Component }) => (
                          <Route key={path} exact path={path}>
                            {({ match }) => (
                              <div className="my-node">
                                <Component/>
                              </div>
                            )}
                          </Route>
                        ))}
                      </Switch>
                    </CSSTransition>
                  </TransitionGroup>
                )    
              }}
            />
          </Grid>
        </Grid>
      </AppWrapper>
    </Router>
  )
}