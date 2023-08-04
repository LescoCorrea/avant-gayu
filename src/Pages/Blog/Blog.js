import React from 'react'
import { Link } from "react-router-dom";
import Footer from '../../components/Footer/Footer'
import './Blog.css'
import Contacts from '../../components/Contacts/Contacts';
import TopNav from '../../components/Navbar/TopNav';

export default function Blog() {
    return (
        <div>
            <div className='mt-3'>
                <TopNav />
                <div className="container mt-5 mb-5">
                    <ul class="breadcrumb">
                        <li><Link to="/" className='breadcumbs'>Accueil /</Link></li>
                        <li><Link to="/artisan" className='breadcumbs'> Nos Artisans /</Link></li>
                        <li><Link to="/propos" className='breadcumbs'> A propos de nous /</Link></li>
                        <li><Link to="/propos" className='breadcumbs'> Contact - nous /</Link></li>
                        <li className='breadcumbs'>Blog</li>
                    </ul>

                    <div className='hearder-blog'>
                        <div>
                            <h1 className='title-blog'>Lorem ipsum dolor sit amet<br /> (consectetur)</h1>
                            <h6 className='sous-blog'>Lorem ipsum dolor sit amet</h6>
                            <p className='par-blog'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been<br /> the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of<br /> type and scrambled it to make a type
                                specimen book. It has survived not only five centuries, but also<br /> the leap
                                into electronic typesetting, remaining essentially unchanged. It was popularised
                                in the<br /> 1960s with the
                                release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                            </p>
                            <div className=''>
                                <span className='blog-video'>Lire</span>
                                <i class="fa fa-play" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>

                    <div className='mt-5'>
                        <h1 className='title-serv'>BLOG</h1>
                        <div className="row mt-5">
                            <div className="col-md-4">
                                <div className="card">
                                    <img src="images/blog1.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">La menuiserie</h5>
                                        <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        </p>
                                        <div className="profile mt-3">
                                            <div className='link-blog'>
                                                <a href="/voirblog" className='blog-link'>Lire</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div class="card">
                                    <img src="images/blog2.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Lorem ipsum dolor sit amet</h5>
                                        <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry..</p>
                                        <div className="profile mt-3">
                                            <div className='link-blog'>
                                                <a href="/voirblog" className='blog-link'>Lire</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div class="card">
                                    <img src="images/blog3.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Lorem ipsum dolor sit amet</h5>
                                        <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        <div className="profile mt-3">
                                            <div className='link-blog'>
                                                <a href="/voirblog" className='blog-link'>Lire</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5 mb-5">
                        <div className="col-md-4">
                            <div className="card">
                                <img src="images/blog1.png" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">La menuiserie</h5>
                                    <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                    <div className="profile mt-3">
                                        <div className='link-blog'>
                                            <a href="/voirblog" className='blog-link'>Lire</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card">
                                <img src="images/blog2.png" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Lorem ipsum dolor sit amet</h5>
                                    <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry..</p>
                                    <div className="profile mt-3">
                                        <div className='link-blog'>
                                            <a href="/voirblog" className='blog-link'>Lire</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card">
                                <img src="images/blog3.png" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Lorem ipsum dolor sit amet</h5>
                                    <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <div className="profile mt-3">
                                        <div className='link-blog'>
                                            <a href="/voirblog" className='blog-link'>Lire</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Contacts />
                </div>
                <Footer />
            </div>
        </div>
    )
}
