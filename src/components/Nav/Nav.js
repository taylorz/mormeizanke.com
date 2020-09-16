import React, { useState } from 'react';
import './Nav.scss'
import Grid from '@material-ui/core/Grid';
import { NavLink} from "react-router-dom";
import Hamburger from 'hamburger-react'

const Nav = () => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false)
    return (
        <Grid container className="nav-container" justify="space-between">
            <Grid item>
                <div className="nav-items">
                    <ul>
                        <li><NavLink onClick={mobileNavOpen && (() => setMobileNavOpen(false))} className="nav-link" exact to="/" activeClassName="active">Mormei Zanke</NavLink></li>
                    </ul>
                    <div className={`nav-page-links ${mobileNavOpen && "mobile-nav-open"}`}>
                        <ul>
                            <li><NavLink onClick={() => setMobileNavOpen(false)} className="nav-link" to="/about" activeClassName="active">About</NavLink></li>
                            <li><NavLink onClick={() => setMobileNavOpen(false)} className="nav-link" to="/contact" activeClassName="active">Contact</NavLink></li>
                        </ul>
                        <ul>
                            <li><NavLink onClick={() => setMobileNavOpen(false)} className="nav-link" to="/poetry" activeClassName="active">Poetry</NavLink></li>
                            <li><NavLink onClick={() => setMobileNavOpen(false)} className="nav-link" to="/essays" activeClassName="active">Essays</NavLink></li>
                            <li><NavLink onClick={() => setMobileNavOpen(false)} className="nav-link" to="/podcasts" activeClassName="active">Podcasts</NavLink></li>
                            <li><NavLink onClick={() => setMobileNavOpen(false)} className="nav-link" to="/reviews" activeClassName="active">Reviews</NavLink></li>
                            <li><NavLink onClick={() => setMobileNavOpen(false)} className="nav-link" to="/drawings" activeClassName="active">Drawings</NavLink></li>
                        </ul>
                    </div>
                </div>
            </Grid>
            <Grid item className="mobile-nav-toggler">
                <div onClick={() => setMobileNavOpen(!mobileNavOpen)}>
                    <Hamburger size={28} toggled={mobileNavOpen}/>
                </div>
            </Grid>
        </Grid>
    )
}

export default Nav