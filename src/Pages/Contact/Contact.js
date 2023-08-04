import React from 'react'
import { Link } from "react-router-dom";
import Contacts from '../../components/Contacts/Contacts';
import Footer from '../../components/Footer/Footer';
import './Contact.css'
import TopNav from '../../components/Navbar/TopNav';

export default function Contact() {
    return (
        <div>
            <div className='mt-3'>
                <TopNav />
                <div className="container mt-5">
                    <ul class="breadcrumb">
                        <li><Link to="/" className='breadcumbs'>Accueil /</Link></li>
                        <li><Link to="/artisan" className='breadcumbs'>Nos Artisans /</Link></li>
                        <li><Link to="/propos" className='breadcumbs'>A propos de nous /</Link></li>
                        <li className='breadcumbs'>Contact</li>
                    </ul>

                    <Contacts />
                </div>
                <Footer />
            </div>
        </div>
    )
}
