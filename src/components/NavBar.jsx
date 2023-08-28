import React from "react";
import '../App.css';

const src = process.env.PUBLIC_URL;

export default function NavBar() {
    return(
        <nav>
            <img src={`${src}/images/travel-logo.svg`} alt="" />
            <p className="nav--title">Travel Journal</p>
        </nav>
    );

}