import React from 'react'
import { Link } from "react-router-dom";
import Footer from '../../components/Footer/Footer'
import './Artisan.css'
import Contacts from '../../components/Contacts/Contacts';
import TopNav from '../../components/Navbar/TopNav';

export default function Artisans() {
    return (
        <div>
            <div className='mt-3'>
            <TopNav/>
            <div className="container-fluid mt-5 mb-5">
                <div className="row">
                    <div className="">
                        <div class="sidebar">
                            <div>
                                <h6 className='titre-filtre'>Filtrer les résultats</h6>
                                <hr className='clr' />
                            </div>
                            <div>
                                <h6 className='titre-filtre'>Trier par Nom</h6>
                                <hr className='clr' />
                                <div className="triage">
                                    <select class="select selct">
                                        <option value="1">Ordre décroissant</option>
                                        <option value="2">Une</option>
                                        <option value="3">Deux</option>
                                        <option value="4">Trois</option>
                                    </select>
                                </div>
                                <h6 className='titre-filtre mt-3'>Catégories</h6>
                                <hr className='clr' />
                                <div className="triage">
                                    <select class="select selct">
                                        <option value="1">Tout</option>
                                        <option value="2">Une</option>
                                        <option value="3">Deux</option>
                                        <option value="4">Trois</option>
                                    </select>
                                </div>
                                <h6 className='titre-filtre mt-3'>Lieux</h6>
                                <hr className='clr' />
                                <div className="">
                                    <h6 className='titre-filtre mt-3'>Sénégal</h6>
                                    <div className='senegal'>
                                        <div className='all-local'>
                                            <h6>Dakar</h6>
                                            <span>67</span>
                                        </div>
                                        <div className='all-local'>
                                            <h6>Saint Louis</h6>
                                            <span>1</span>
                                        </div>
                                        <div className='all-local'>
                                            <h6>Thies</h6>
                                            <span>3</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="triage">
                                    <select class="select selcted">
                                        <option value="1">Prix</option>
                                        <option value="2">Une</option>
                                        <option value="3">Deux</option>
                                        <option value="4">Trois</option>
                                    </select>
                                </div>
                                <div className='contain-number'>
                                    <a href="/*" className='numb-cont'>
                                        <i class="fa fa-filter" aria-hidden="true"></i>
                                        <span className='calle'>Filtrer</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className=" container-content">
                            <div className='search-content'>
                                <div>
                                    <ul class="breadcrumb">
                                        <li><Link to="/" className='breadcumbs'>Accueil / </Link></li>
                                        <li className='breadcumbs'>Nos artisans</li>
                                    </ul>
                                    <div className='lieu'>
                                        <h1 className='pays'>Sénégal</h1>
                                        <h6 className='resultats'>207 résultats trouvés</h6>
                                    </div>
                                </div>
                                <div className="">
                                    <select class="select selc">

                                        <option value="1">Trier par: Les plus annotés</option>
                                        <option value="2">Menuisier</option>
                                        <option value="3">Maçon</option>
                                        <option value="4">Plombier</option>
                                    </select>
                                </div>
                            </div>

                            <div class="content-container mt-5">
                                <div className="row mt-3">
                                    <div className="col-md-3">
                                        <div className='prop'>
                                            <div className='avatar-prop'>
                                                <img src="images/prop4.png" alt="" />
                                                <div className='coordonne mt-3'>
                                                    <div>
                                                        <h3 className='atelier'>Wa keur Serigne Saliou</h3>
                                                        <h6 className='prof'>Charpentier</h6>
                                                        <h6 className='price'>30.000 FCFA</h6>
                                                        <div className='all-stars'>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star-o" aria-hidden="true"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div>
                                            <div className='avatar-prop'>
                                                <img src="images/prop3.png" alt="" />
                                                <div className='coordonne mt-3'>
                                                    <div>
                                                        <h3 className='atelier'>Atelier Mariama</h3>
                                                        <h6 className='prof'>Menuisière</h6>
                                                        <h6 className='price'>8.000 FCFA</h6>
                                                        <div className='all-stars'>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star-o" aria-hidden="true"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div>
                                            <div className='avatar-prop'>
                                                <img src="images/prop2.png" alt="" />
                                                <div className='coordonne mt-3'>
                                                    <div>
                                                        <h3 className='atelier'>Al Amsali Group</h3>
                                                        <h6 className='prof'>Électricien</h6>
                                                        <h6 className='price'>8.000 FCFA</h6>
                                                        <div className='all-stars'>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star-o" aria-hidden="true"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div>
                                            <div className='avatar-prop'>
                                                <img src="images/prop1.png" alt="" />
                                                <div className='coordonne mt-3'>
                                                    <div>
                                                        <h3 className='atelier'>Al Amsali Group</h3>
                                                        <h6 className='prof'>Électricien</h6>
                                                        <h6 className='price'>8.000 FCFA</h6>
                                                        <div className='all-stars'>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star-o" aria-hidden="true"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-3">
                                        <div className='prop'>
                                            <div className='avatar-prop'>
                                                <img src="images/prop4.png" alt="" />
                                                <div className='coordonne mt-3'>
                                                    <div>
                                                        <h3 className='atelier'>Wa keur Serigne Saliou</h3>
                                                        <h6 className='prof'>Charpentier</h6>
                                                        <h6 className='price'>30.000 FCFA</h6>
                                                        <div className='all-stars'>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star-o" aria-hidden="true"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div>
                                            <div className='avatar-prop'>
                                                <img src="images/prop3.png" alt="" />
                                                <div className='coordonne mt-3'>
                                                    <div>
                                                        <h3 className='atelier'>Atelier Mariama</h3>
                                                        <h6 className='prof'>Menuisière</h6>
                                                        <h6 className='price'>8.000 FCFA</h6>
                                                        <div className='all-stars'>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star-o" aria-hidden="true"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div>
                                            <div className='avatar-prop'>
                                                <img src="images/prop2.png" alt="" />
                                                <div className='coordonne mt-3'>
                                                    <div>
                                                        <h3 className='atelier'>Al Amsali Group</h3>
                                                        <h6 className='prof'>Électricien</h6>
                                                        <h6 className='price'>8.000 FCFA</h6>
                                                        <div className='all-stars'>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star-o" aria-hidden="true"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div>
                                            <div className='avatar-prop'>
                                                <img src="images/prop1.png" alt="" />
                                                <div className='coordonne mt-3'>
                                                    <div>
                                                        <h3 className='atelier'>Al Amsali Group</h3>
                                                        <h6 className='prof'>Électricien</h6>
                                                        <h6 className='price'>8.000 FCFA</h6>
                                                        <div className='all-stars'>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star-o" aria-hidden="true"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-3">
                                        <div className='prop'>
                                            <div className='avatar-prop'>
                                                <img src="images/prop4.png" alt="" />
                                                <div className='coordonne mt-3'>
                                                    <div>
                                                        <h3 className='atelier'>Wa keur Serigne Saliou</h3>
                                                        <h6 className='prof'>Charpentier</h6>
                                                        <h6 className='price'>30.000 FCFA</h6>
                                                        <div className='all-stars'>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star-o" aria-hidden="true"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div>
                                            <div className='avatar-prop'>
                                                <img src="images/prop3.png" alt="" />
                                                <div className='coordonne mt-3'>
                                                    <div>
                                                        <h3 className='atelier'>Atelier Mariama</h3>
                                                        <h6 className='prof'>Menuisière</h6>
                                                        <h6 className='price'>8.000 FCFA</h6>
                                                        <div className='all-stars'>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star-o" aria-hidden="true"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div>
                                            <div className='avatar-prop'>
                                                <img src="images/prop2.png" alt="" />
                                                <div className='coordonne mt-3'>
                                                    <div>
                                                        <h3 className='atelier'>Al Amsali Group</h3>
                                                        <h6 className='prof'>Électricien</h6>
                                                        <h6 className='price'>8.000 FCFA</h6>
                                                        <div className='all-stars'>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star-o" aria-hidden="true"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div>
                                            <div className='avatar-prop'>
                                                <img src="images/prop1.png" alt="" />
                                                <div className='coordonne mt-3'>
                                                    <div>
                                                        <h3 className='atelier'>Al Amsali Group</h3>
                                                        <h6 className='prof'>Électricien</h6>
                                                        <h6 className='price'>8.000 FCFA</h6>
                                                        <div className='all-stars'>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star-o" aria-hidden="true"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-3">
                                        <div className='prop'>
                                            <div className='avatar-prop'>
                                                <img src="images/prop4.png" alt="" />
                                                <div className='coordonne mt-3'>
                                                    <div>
                                                        <h3 className='atelier'>Wa keur Serigne Saliou</h3>
                                                        <h6 className='prof'>Charpentier</h6>
                                                        <h6 className='price'>30.000 FCFA</h6>
                                                        <div className='all-stars'>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star-o" aria-hidden="true"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div>
                                            <div className='avatar-prop'>
                                                <img src="images/prop3.png" alt="" />
                                                <div className='coordonne mt-3'>
                                                    <div>
                                                        <h3 className='atelier'>Atelier Mariama</h3>
                                                        <h6 className='prof'>Menuisière</h6>
                                                        <h6 className='price'>8.000 FCFA</h6>
                                                        <div className='all-stars'>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star-o" aria-hidden="true"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div>
                                            <div className='avatar-prop'>
                                                <img src="images/prop2.png" alt="" />
                                                <div className='coordonne mt-3'>
                                                    <div>
                                                        <h3 className='atelier'>Al Amsali Group</h3>
                                                        <h6 className='prof'>Électricien</h6>
                                                        <h6 className='price'>8.000 FCFA</h6>
                                                        <div className='all-stars'>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star-o" aria-hidden="true"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div>
                                            <div className='avatar-prop'>
                                                <img src="images/prop1.png" alt="" />
                                                <div className='coordonne mt-3'>
                                                    <div>
                                                        <h3 className='atelier'>Al Amsali Group</h3>
                                                        <h6 className='prof'>Électricien</h6>
                                                        <h6 className='price'>8.000 FCFA</h6>
                                                        <div className='all-stars'>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star-o" aria-hidden="true"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-3">
                                        <div className='prop'>
                                            <div className='avatar-prop'>
                                                <img src="images/prop4.png" alt="" />
                                                <div className='coordonne mt-3'>
                                                    <div>
                                                        <h3 className='atelier'>Wa keur Serigne Saliou</h3>
                                                        <h6 className='prof'>Charpentier</h6>
                                                        <h6 className='price'>30.000 FCFA</h6>
                                                        <div className='all-stars'>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star-o" aria-hidden="true"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div>
                                            <div className='avatar-prop'>
                                                <img src="images/prop3.png" alt="" />
                                                <div className='coordonne mt-3'>
                                                    <div>
                                                        <h3 className='atelier'>Atelier Mariama</h3>
                                                        <h6 className='prof'>Menuisière</h6>
                                                        <h6 className='price'>8.000 FCFA</h6>
                                                        <div className='all-stars'>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star-o" aria-hidden="true"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div>
                                            <div className='avatar-prop'>
                                                <img src="images/prop2.png" alt="" />
                                                <div className='coordonne mt-3'>
                                                    <div>
                                                        <h3 className='atelier'>Al Amsali Group</h3>
                                                        <h6 className='prof'>Électricien</h6>
                                                        <h6 className='price'>8.000 FCFA</h6>
                                                        <div className='all-stars'>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star-o" aria-hidden="true"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div>
                                            <div className='avatar-prop'>
                                                <img src="images/prop1.png" alt="" />
                                                <div className='coordonne mt-3'>
                                                    <div>
                                                        <h3 className='atelier'>Al Amsali Group</h3>
                                                        <h6 className='prof'>Électricien</h6>
                                                        <h6 className='price'>8.000 FCFA</h6>
                                                        <div className='all-stars'>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star-o" aria-hidden="true"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='pagination-container mt-5'>
                            <nav aria-label="...">
                                <ul className="pagination pagination-sm">
                                    <li className="page-item active">
                                        <a className="page-link" href="/#" tabindex="-1">1</a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="/#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="/#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="/#">4</a></li>
                                    <li className="page-item"><a className="page-link" href="/#">5</a></li>
                                    <li className="page-item"><a className="page-link" href="/#">6</a></li>
                                    <li className="page-item"><a className="page-link" href="/#">7</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <Contacts />
            <Footer />
            </div>
        </div>
    )
}
