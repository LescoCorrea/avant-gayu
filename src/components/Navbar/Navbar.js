import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-md">
                <div className="container bg-home">
                    <img src="images/logo.png" alt="logo" />
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05"
                        aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExample05">
                        <ul className="navbar-nav ml-auto pl-lg-5 pl-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">ACCUEIL</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/artisan">NOS ARTISANS</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link" to="/propos">A PROPOS</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">CONTACT</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blog">BLOG</Link>
                            </li>

                        </ul>

                        <ul className="navbar-nav ml-auto cta-btn">
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Connexion /</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Inscription</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}
