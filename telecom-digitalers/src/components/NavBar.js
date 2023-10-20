import React, { Component } from "react";
import "../../src/App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

class NavBar extends Component {
render() {
    return (
    <div>
        <header>
            <h1 className="title">Digitalers Portal &#127748;</h1>
            <h2 className="pageSubtitle">Ultimas noticias del curso digitalers</h2>
        </header>
        <nav>
            <ul>
                <li>
                    <a href="index.html">Home</a>
                </li>
                <li>
                    <a href="#form">Contacto</a>
                </li>
            </ul>
        </nav>
    </div>);
    }
}

export default NavBar;
