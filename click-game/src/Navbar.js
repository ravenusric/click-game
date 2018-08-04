import React from "react";
import "../src/styles/Navbar.css";

const Navbar = props => (
    <div className="navbar sticky-top">
        <a className="navbar-brand" href="/Clicky-Game/">Wrestler Clicky Game</a>
        <li className="score">Score: {props.score} | Top Score: {props.topScore}</li>
    </div>
)
 

export default Navbar;