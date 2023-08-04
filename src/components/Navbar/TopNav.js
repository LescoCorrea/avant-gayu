import React, { useState } from 'react'
import './TopNav.css'
import { Link, NavLink } from 'react-router-dom'


export default function TopNav() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <div className="container">
            <nav className='nav' >
                <a href="/" className='avatar-img'><img src="images/logo.png" alt="" /></a>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <NavLink to="/" activeClassName="active" className="nav-links" onClick={handleClick}>ACCUEIL</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/artisan" activeClassName="active" className="nav-links" onClick={handleClick} >NOS ARTISANS</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/propos" activeClassName="active" className="nav-links" onClick={handleClick} >A PROPOS DE NOUS</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/contact" activeClassName="active" className="nav-links" onClick={handleClick} >CONTACT</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/blog" activeClassName="active" className="nav-links" onClick={handleClick} >BLOG</NavLink>
                    </li>
                    <li className='nav-item'>
                        <i class="fa fa-search" aria-hidden="true"></i>
                    </li>

                    <div className='btn-cont'>
                        <Link to="/login">CONNEXION</Link>
                        <span className='bar'>/</span>
                        <Link href="/register" className='reg'> INSCRIPTION</Link>
                    </div>
                </ul>
                <div className='nav-icon' onClick={handleClick}>
                    <i className={click ? "fa fa-times" : 'fa fa-bars'}></i>
                </div>
            </nav>

        </div>
    )
}


