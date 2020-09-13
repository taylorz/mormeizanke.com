import React from 'react';
import './Nav.scss'
import Grid from '@material-ui/core/Grid';
import { NavLink} from "react-router-dom";

const Nav = () => (
    <Grid container className="nav-container">
        <Grid item>
            <ul>
                <li><NavLink className="nav-link" exact to="/" activeClassName="active">Mormei Zanke</NavLink></li>
            </ul>
            <ul>
                <li><NavLink className="nav-link" to="/about" activeClassName="active">About</NavLink></li>
                <li><NavLink className="nav-link" to="/contact" activeClassName="active">Contact</NavLink></li>
            </ul>
            <ul>
                <li><NavLink className="nav-link" to="/poetry" activeClassName="active">Poetry</NavLink></li>
                <li><NavLink className="nav-link" to="/essays" activeClassName="active">Essays</NavLink></li>
                <li><NavLink className="nav-link" to="/podcasts" activeClassName="active">Podcasts</NavLink></li>
                <li><NavLink className="nav-link" to="/reviews" activeClassName="active">Reviews</NavLink></li>
                <li><NavLink className="nav-link" to="/drawings" activeClassName="active">Drawings</NavLink></li>
            </ul>
        </Grid>
    </Grid>
)

export default Nav