import React from 'react'
import { NavLink } from 'react-router-dom'

export default function AjoutArtisan() {

    return (
        <div>
            <div className='content-dash'>
                <div className='logo-dash'>
                    <img src="/images/Group.png" alt="logo" />
                </div>
            </div>
            <div class="container-fluid">
                <div class="row flex-nowrap">
                    <div className="col-md-2 bg-sidebar">
                        <h1 className='principal mt-3'>PRINCIPAL</h1>
                        <div className='mt-3'>
                            <ul>
                                <li className='link-dash'>
                                    <NavLink to="/dashboard" className='links'>
                                        <i class="fa fa-home" aria-hidden="true"></i>
                                        Dashboard
                                    </NavLink>
                                </li>
                                <li className='link-dash mt-3'>
                                    <NavLink to="/dashboard/liste" className='links'>
                                        <i class="fa fa-user" aria-hidden="true"></i>
                                        Artisans
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className='btn-log'>
                            <button className='btn-lgt'><i class="fa fa-sign-out" aria-hidden="true"></i>Déconnexion</button>
                        </div>
                    </div>
                    <div className="col-md-10 content-dashboard">

                        <div className='formulaire'>
                            <form action="" className='cont-formulaire'>
                                <h3 className='add'>Ajouter un artisan</h3>
                                <div className='content-input mt-3'>
                                    <div className='cont-input'>
                                        <div>
                                            <label className='nom'>Prénom</label>
                                        </div>
                                        <div>
                                            <input type="text" className='input-dash' />
                                        </div>
                                    </div>
                                    <div className='cont-input'>
                                        <div>
                                            <label className='nom'>Nom</label>
                                        </div>
                                        <div>
                                            <input type="text" className='input-dash' />
                                        </div>
                                    </div>
                                </div>
                                <div className='content-input mt-3'>
                                    <div className='cont-input'>
                                        <div>
                                            <label className='nom'>Email</label>
                                        </div>
                                        <div>
                                            <input type="text" className='input-dash' />
                                        </div>
                                    </div>
                                    <div className='cont-input'>
                                        <div>
                                            <label className='nom'>Numéro de téléphone</label>
                                        </div>
                                        <div>
                                            <input type="text" className='input-dash' />
                                        </div>
                                    </div>
                                </div>
                                <div className='content-input mt-3'>
                                    <div className='cont-input'>
                                        <div>
                                            <label className='nom'>Lieu</label>
                                        </div>
                                        <select className='form-selected' id="example-single">
                                            <option value="1"></option>
                                            <option value="2">Option 2</option>
                                            <option value="3">Option 3</option>
                                            <option value="4">Option 4</option>
                                            <option value="5">Option 5</option>
                                            <option value="6">Option 6</option>
                                        </select>
                                    </div>
                                    <div className='cont-input'>
                                        <div>
                                            <label className='nom'>Mot de passe</label>
                                        </div>
                                        <div>
                                            <input type="text" className='input-dash' />
                                        </div>
                                    </div>
                                </div>
                                <div className='content-input mt-3'>
                                    <div className='cont-input'>
                                        <div>
                                            <label className='nom'>Métier</label>
                                        </div>
                                        <select className='form-selected' id="example-single">
                                            <option value="1"></option>
                                            <option value="2">Option 2</option>
                                            <option value="3">Option 3</option>
                                            <option value="4">Option 4</option>
                                            <option value="5">Option 5</option>
                                            <option value="6">Option 6</option>
                                        </select>
                                    </div>
                                    <div className='cont-input'>
                                        <div>
                                            <label className='nom'>Atélier</label>
                                        </div>
                                        <div>
                                            <input type="text" className='input-dash' />
                                        </div>
                                    </div>
                                </div>
                                <div className='btn-ajout'>
                                    <button className='btn-add'>Ajouter</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
