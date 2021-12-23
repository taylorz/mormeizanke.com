import React, { useState }  from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Grid from '@material-ui/core/Grid';
import AppWrapper from './components/AppWrapper/AppWrapper'
import Nav from './components/Nav/Nav'
import Homepage from './pages/Homepage/Homepage';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Journalism from './pages/Journalism/Journalism';
import Poetry from './pages/Poetry/Poetry';
import Audio from './pages/Audio/Audio';
import createHistory from 'history/createBrowserHistory'

const routes = [
  { path: '/', name: 'Home', Component: Homepage },
  { path: '/about', name: 'About', Component: About },
  { path: '/contact', name: 'Contact', Component: Contact },
  { path: '/journalism', name: 'Journalism', Component: Journalism },
  { path: '/poetry', name: 'Poetry', Component: Poetry },
  { path: '/audio', name: 'Audio', Component: Audio },
]
const history = createHistory()
export default () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  return(
    <Router history={history}>
      <AppWrapper className={mobileNavOpen && "wrapper-nav-open"}>
        <Grid container>
          <Grid item xs={12} sm={2}>
            <Nav mobileNavOpen={mobileNavOpen} closeNav={() => setMobileNavOpen(false)} toggleNav={() => setMobileNavOpen(!mobileNavOpen)}/>
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
