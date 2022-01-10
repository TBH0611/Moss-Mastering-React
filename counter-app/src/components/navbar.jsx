import React, { Component } from 'react';

//stateless functional component sfc
const NavBar = (props) => {
    return (
         <nav className="navbar navbar-light bg-light">
        <a href="#" className="navbar-brand"> Navbar{"  "}
        <span className="badge badge-pill badge-secondary">{props.totalCounters}</span></a>
        </nav> );
};
 
export default NavBar;
