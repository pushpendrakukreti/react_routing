import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Home from "./component/Home";
import Contact from "./component/Contact";
import About from "./component/About";
import User from "./component/User";
import MovieList from "./component/MovieList";

class Main extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        {/* <div>
                            <Link to='/'>Home</Link>
                            <br></br>
                            <Link to='/about'>About</Link>
                            <br></br>
                            <Link to='/contact'>Contact</Link>
                        </div> */}
                        <div>
                            <NavLink to='/' activeStyle={{ color: "green" }}>Home</NavLink>
                            <br></br>
                            <NavLink to='/about' activeStyle={{ color: "green" }}>About</NavLink>
                            <br></br>
                            <NavLink to='/contact' activeStyle={{ color: "green" }}>Contact</NavLink>
                            <br></br>
                            <NavLink to='/user/john' activeStyle={{ color: "green" }}>User</NavLink>
                            <br></br>
                            <NavLink to='/movies' activeStyle={{ color: "green" }}>Movies</NavLink>
                        </div>
                        <hr></hr>
                        <Route path='/' exact render={Home} />
                        <Route path='/home' render={Home} />
                        <Route path='/contact' render={Contact} />
                        <Route path='/about' render={About} />
                        <Route path='/user/:username' render={User} />
                        <Route path='/movies' component={MovieList} />
                    </div>
                </Router>
            </div>
        )
    }
}

export default Main;