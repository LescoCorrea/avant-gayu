import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div>
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
                        <h1 className='content-title'>
                            Dashboard
                        </h1>
                        <h5 className='title-art mt-3'>Vos artisans ajoutés</h5>
                        <div className="row-dash mt-3">
                            <div className='me-dash'>
                                <div className='tout-dash'>
                                    <h5 className='nbr-art'>250</h5>
                                    <h6 className='nbre-art'>Nombre d'Utilisateurs</h6>
                                </div>
                                <div className='cont-usr'>
                                    <i class="fa fa-user-o" aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className='me-dash'>
                                <div className='tout-dash'>
                                    <h5 className='nbr-art'>250</h5>
                                    <h6 className='nbre-art'>Nombre d'artisans</h6>
                                </div>
                                <div className='cont-usr'>
                                    <i class="fa fa-user-circle" aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className='me-dash'>
                                <div className='tout-dash'>
                                    <h5 className='nbr-art'>250</h5>
                                    <h6 className='nbre-art'>Nombre commentaires</h6>
                                </div>
                                <div className='cont-usr'>
                                    <i class="fa fa-commenting-o" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
