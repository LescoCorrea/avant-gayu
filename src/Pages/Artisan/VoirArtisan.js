import React from 'react'
import { Link } from "react-router-dom";
import Footer from '../../components/Footer/Footer'
import './Artisan.css'
import Contacts from '../../components/Contacts/Contacts';
import TopNav from '../../components/Navbar/TopNav';

export default function VoirArtisan() {
    return (
        <div className='container-artisan'>
            <div className='header-artisan'>
                <TopNav/>
            </div>
            <div className="container mt-5 mb-5">

                <div className='all-blog-link'>
                    <div className='blog-préc'>
                        <i class="fa fa-angle-left" aria-hidden="true"><Link className='préc' to="/artisan">Précédent</Link></i>

                    </div>
                    <ul className="breadcrumb">
                        <li><Link to="/" className='breadcumbs'>Accueil /</Link></li>
                        <li className='breadcumbs'>Nos artisans</li>
                    </ul>
                </div>

                <div className='mt-5 mb-5'>

                    <div className="row mt-5 mb-5">
                        <div className="col-md-4">
                            <div className='avatar'>
                                <div>
                                    <img src="images/span.avatar.png" alt="" />
                                </div>
                                <div>
                                    <h5 className='titre-avatar'>Wa Keur Srigne Saliou</h5>
                                    <span className='prof-avatar'>Charpenterie</span>
                                </div>
                            </div>
                            <div className='contact-artisan mt-3'>
                                <span>Vérifié via :</span>
                                <div className='numero'>
                                    <img src="images/check.png" alt="" />
                                    <span className='mail'>Email</span>
                                </div>
                                <div className='numero'>
                                    <img src="images/check.png" alt="" />
                                    <span className='mail'>Numéro de portable</span>
                                </div>
                            </div>

                            <div className='mt-5'>
                                <h5 className='num-art mb-3'>Contacter l’artisan</h5>
                                <h6 className='cont-art'>Contacter par Téléphone</h6>
                            </div>
                            <div className='contain-whtsp'>
                                <a href="/*" className='what-cont'>
                                    <i className="fa fa-whatsapp" aria-hidden="true"></i>
                                    <span className='what-link'>WhatsApp</span>
                                </a>
                            </div>
                            <div className='contain-number'>
                                <a href="/*" className='numb-cont'>
                                    <i class="fa fa-phone" aria-hidden="true"></i>
                                    <span className='call'>Afficher le numéro</span>
                                </a>
                            </div>

                            <div className='mt-5'>
                                <h6 className='cont-art'>Contacter via chat</h6>
                            </div>
                            <div className='contain-number'>
                                <a href="/*" className='numb-cont'>
                                    <i class="fa fa-comments" aria-hidden="true"></i>
                                    <span className='call'>Commencez à discuter</span>
                                </a>
                            </div>
                            <div className='contain-whtsp'>
                                <a href="/*" className='what-cont'>
                                    <i class="fa fa-heart" aria-hidden="true"></i>
                                    <span className='what-link'>Ajouter aux Favoris</span>
                                </a>
                            </div>
                        </div>

                        <div className="col-md-8 voir-artisan">
                            <div>
                                <div>
                                    <h3 className='titre-prix'>Prix</h3>
                                </div>
                                <div className='mt-3'>
                                    <h3 className='titre-net'>30 000 FCFA</h3>
                                    <h3 className='ad'>Adresse</h3>
                                </div>
                                <div className='local'>
                                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                                    <span className='lieu'>Mermoz Dakar</span>
                                </div>
                                <div className='mt-3'>
                                    <h3 className='ad'>Description de l’artisan</h3>
                                    <p className='par-var'>
                                        Lorem ipsum dolor sit amet consectetur. Id integer sem egestas urna lectus platea orci ac. Praesent ut nisl luctus eu nunc augue etiam pulvinar vitae. Morbi ultricies risus viverra sit facilisi ridiculus eget pulvinar. Quam justo in nisl enim nec fames dui. Lorem urna cursus in phasellus. Euismod nulla iaculis sapien viverra. Sagittis nisl eu nulla sit laoreet est.
                                        Netus nec at vitae diam quam elit sit lacus elementum. Eget sed nunc maecenas nisl proin. A.
                                    </p>
                                </div>
                                <div className='cont-comment'>
                                    <div className='all-star'>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star-o" aria-hidden="true"></i>
                                    </div>
                                    <div>
                                        <h4 className='comments'>275 Commentaires</h4>
                                    </div>
                                </div>
                                <hr className='barr' />
                                <div className='con-securité'>
                                    <h3 className='ad'>Conseils de sécurité</h3>
                                    <div className='all-items'>
                                        <li className='items'>Ne payez pas d’avance, même pour la livraison.</li>
                                        <li className='items'>Ne payez pas d’avance, même pour la livraison.</li>
                                        <li className='items'>Ne payez pas d’avance, même pour la livraison.</li>
                                        <li className='items'>Ne payez pas d’avance, même pour la livraison.</li>
                                        <li className='items'>Ne payez pas d’avance.</li>
                                    </div>
                                    <li className='tops'><a href="/#" className='cons-item'>Lisez nos conseils de sécurité</a></li>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className='mb-3'>
                            <h1 className='reali'>LES REALISATIONS DE L’ARTISAN</h1>
                        </div >
                        <div className="col-md-6">
                            <div>
                                <img src="images/artisan1.png" alt="" />
                                <div className='cont-comment mt-3'>
                                    <div className='all-star'>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star-o" aria-hidden="true"></i>
                                    </div>
                                    <div>
                                        <h4 className='comments'>275 Commentaires</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div>
                                <img src="images/artisan2.png" alt="" />
                                <div className='cont-comment mt-3'>
                                    <div className='all-star'>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star-o" aria-hidden="true"></i>
                                    </div>
                                    <div>
                                        <h4 className='comments'>275 Commentaires</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <div>
                                <img src="images/artisan3.png" alt="" />
                                <div className='cont-comment mt-3'>
                                    <div className='all-star'>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star-o" aria-hidden="true"></i>
                                    </div>
                                    <div>
                                        <h4 className='comments'>275 Commentaires</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div>
                                <img src="images/artisan4.png" alt="" />
                                <div className='cont-comment mt-3'>
                                    <div className='all-star'>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star-o" aria-hidden="true"></i>
                                    </div>
                                    <div>
                                        <h4 className='comments'>275 Commentaires</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <div>
                                <img src="images/artisan5.png" alt="" />
                                <div className='cont-comment mt-3'>
                                    <div className='all-star'>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star-o" aria-hidden="true"></i>
                                    </div>
                                    <div>
                                        <h4 className='comments'>275 Commentaires</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div>
                                <img src="images/artisan6.png" alt="" />
                                <div className='cont-comment mt-3'>
                                    <div className='all-star'>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star-o" aria-hidden="true"></i>
                                    </div>
                                    <div>
                                        <h4 className='comments'>275 Commentaires</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <div>
                                <img src="images/artisan7.png" alt="" />
                                <div className='cont-comment mt-3'>
                                    <div className='all-star'>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star-o" aria-hidden="true"></i>
                                    </div>
                                    <div>
                                        <h4 className='comments'>275 Commentaires</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div>
                                <img src="images/artisan8.png" alt="" />
                                <div className='cont-comment mt-3'>
                                    <div className='all-star'>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star-o" aria-hidden="true"></i>
                                    </div>
                                    <div>
                                        <h4 className='comments'>275 Commentaires</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <div>
                                <img src="images/artisan9.png" alt="" />
                                <div className='cont-comment mt-3'>
                                    <div className='all-star'>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star-o" aria-hidden="true"></i>
                                    </div>
                                    <div>
                                        <h4 className='comments'>275 Commentaires</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div>
                                <img src="images/artisan10.png" alt="" />
                                <div className='cont-comment mt-3'>
                                    <div className='all-star'>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star-o" aria-hidden="true"></i>
                                    </div>
                                    <div>
                                        <h4 className='comments'>275 Commentaires</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <div>
                                <img src="images/artisan11.png" alt="" />
                                <div className='cont-comment mt-3'>
                                    <div className='all-star'>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star-o" aria-hidden="true"></i>
                                    </div>
                                    <div>
                                        <h4 className='comments'>275 Commentaires</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div>
                                <img src="images/artisan12.png" alt="" />
                                <div className='cont-comment mt-3'>
                                    <div className='all-star'>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star-o" aria-hidden="true"></i>
                                    </div>
                                    <div>
                                        <h4 className='comments'>275 Commentaires</h4>
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
    )
}
