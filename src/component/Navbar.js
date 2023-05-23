import React from "react";
import { Link } from "react-router-dom";

function Nav(){
    return (
        <>
            <nav>
                <Link to="/">Home </Link>
                <Link to="/student">Student </Link>
                <Link to="/contactUs">Contact-us</Link>
            </nav>
        </>
    );

}

export default Nav;