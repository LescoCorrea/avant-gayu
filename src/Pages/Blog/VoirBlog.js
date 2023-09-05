import React from 'react'
import { Link } from "react-router-dom";
import Footer from '../../components/Footer/Footer'
import './Blog.css'
import Contacts from '../../components/Contacts/Contacts';
import TopNav from '../../components/Navbar/TopNav';

export default function VoirBlog() {
  return (
    <div>
      <div className='mt-3'>
        <TopNav />
        <div className="container mt-5 mb-5">

          <div className='all-blog-link'>
            <div className='blog-préc'>
              <i class="fa fa-angle-left" aria-hidden="true"><Link className='préc' to="/blog">Précédent</Link></i>

            </div>
            <ul className="breadcrumb predb">
              <li><Link to="/" className='breadcumbs'>Accueil /</Link></li>
              <li><Link to="/artisan" className='breadcumbs'> Nos Artisans /</Link></li>
              <li><Link to="/propos" className='breadcumbs'> A propos de nous /</Link></li>
              <li><Link to="/propos" className='breadcumbs'> Contact - nous /</Link></li>
              <li className='breadcumbs'>Blog</li>
            </ul>
          </div>

          <div className='mt-5'>
            <h1 className='title-serv'>LA MENUISERIE</h1>
            <div className="row mt-5 mb-5">
              <div className="col-md-6">
                <div className='par-prop'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec gravida accumsan venenatis.Integer convallis, ex quis
                    pulvinar sodales, velit urna elementum est, ut dapibus felis
                    mauris in nisi. Fusce posuere sodales ante non sollicitudin.
                    Donec turpis justo, finibus vel mollis ac, porttitor quis
                    est. Fusce ultrices urna a augue tempus gravida. Nullam
                    volutpat libero ultrices semper maximus.
                  </p>
                  <p>
                    Pellentesque varius orci nec ante facilisis ultrices. Phasellus maximus dolor eget
                    diam rutrum, vitae aliquet nisi luctus. Duis id efficitur neque. Morbi tincidunt,
                    augue vel lacinia pulvinar, lectus turpis ultrices augue, sit amet scelerisque ligula
                    velit vel mi. In gravida vel lacus non pretium. Cras ullamcorper accumsan quam,
                    at placerat sapien scelerisque eu. Nullam eget neque mauris. Nam tellus nisi, rutrum
                    nec risus at, cursus vestibulum mi. Class aptent taciti sociosqu ad litora torquent
                    per conubia nostra, per inceptos himenaeos. Curabitur porttitor ex id risus feugiat
                    efficitur. Phasellus id justo ac risus auctor porttitor nec at felis. Nullam ligula
                    metus, egestas luctus quam tempus, ultricies sollicitudin justo.
                    aliquam sit amet pharetra vitae, posuere vitae nulla. Fusce ullamcorper molestie
                    tortor, ac faucibus sem bibendum vitae.
                  </p>
                  <p>
                    Pellentesque varius orci nec ante facilisis ultrices. Phasellus maximus dolor eget
                    diam rutrum, vitae aliquet nisi luctus. Duis id efficitur neque. Morbi tincidunt,
                    augue vel lacinia pulvinar, lectus turpis ultrices augue, sit amet scelerisque ligula
                    velit vel mi.
                  </p>
                  <p>
                    Pellentesque varius orci nec ante facilisis ultrices. Phasellus maximus dolor eget
                    diam rutrum, vitae aliquet nisi luctus. Duis id efficitur neque. Morbi tincidunt,
                    augue vel lacinia pulvinar, lectus turpis ultrices augue. Fusce ullamcorper molestie
                    tortor, ac faucibus sem bibendum vitae.
                  </p>
                  <p>
                    Pellentesque varius orci nec ante facilisis ultrices. Phasellus maximus dolor eget
                    diam rutrum, vitae aliquet nisi luctus. Duis id efficitur neque. Morbi tincidunt,
                    augue vel lacinia pulvinar, lectus turpis ultrices augue. Fusce ullamcorper molestie
                    tortor, ac faucibus sem bibendum vitae.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div>
                  <img src="images/detail-blog1.png" alt="" />
                </div>
                <div className='mt-5'>
                  <img src="images/detail-blog2.png" alt="" />
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
