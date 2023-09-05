import React from 'react'
import { NavLink } from 'react-router-dom'


export default function ListeArtisans() {

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
                        <h1 className='content-title'>
                            Artisans
                        </h1>
                        <h5 className='title-art mt-3'>Visualisez, modifiez et supprimer un artisan</h5>
                        <div className='ajoutArt mt-3'>
                            <a href="/dashboard/liste/ajout" className='link-art'>
                                <i class="fa fa-plus" aria-hidden="true"></i>
                                <small className='add-art'>Ajouter un artisan</small>
                            </a>
                        </div>
                        <table class="table mt-5">
                            <thead>
                                <tr>
                                    <th scope="col" className='title-tab'>Nom de l'artisan</th>
                                    <th scope="col" className='title-tab'>Métier</th>
                                    <th scope="col" className='title-tab'>Atélier</th>
                                    <th scope="col" className='title-tab'>Email</th>
                                    <th scope="col" className='title-tab'>Numéro de téléphone</th>
                                    <th scope="col" className='title-tab'>Lieu</th>
                                    <th scope="col" className='title-tab'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        <div class="form-check">
                                            <input class="form-check-input chk" type="checkbox" value="" id="flexCheckDefault" />
                                            <h6 className='cont-tab'>Mohamed Badiane</h6>
                                        </div>
                                    </th>
                                    <td className='cont-tab'>Designer</td>
                                    <td className='cont-tab'>Metha Design</td>
                                    <td className='cont-tab'>Metha@test.sn</td>
                                    <td className='cont-tab'>+221 777 77 77</td>
                                    <td className='cont-tab'>Parceles U15</td>
                                    <td className='actions'>
                                        <i class="fa fa-trash" aria-hidden="true"></i>
                                        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <div class="form-check">
                                            <input class="form-check-input chk" type="checkbox" value="" id="flexCheckDefault" />
                                            <h6 className='cont-tab'>Mohamed Badiane</h6>
                                        </div>
                                    </th>
                                    <td className='cont-tab'>Designer</td>
                                    <td className='cont-tab'>Metha Design</td>
                                    <td className='cont-tab'>Metha@test.sn</td>
                                    <td className='cont-tab'>+221 777 77 77</td>
                                    <td className='cont-tab'>Dakar</td>
                                    <td className='actions'>
                                        <i class="fa fa-trash" aria-hidden="true"></i>
                                        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <div class="form-check">
                                            <input class="form-check-input chk" type="checkbox" value="" id="flexCheckDefault" />
                                            <h6 className='cont-tab'>Mohamed Badiane</h6>
                                        </div>
                                    </th>
                                    <td className='cont-tab'>Designer</td>
                                    <td className='cont-tab'>Metha Design</td>
                                    <td className='cont-tab'>Metha@test.sn</td>
                                    <td className='cont-tab'>+221 777 77 77</td>
                                    <td className='cont-tab'>Thies</td>
                                    <td className='actions'>
                                        <i class="fa fa-trash" aria-hidden="true"></i>
                                        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <div class="form-check">
                                            <input class="form-check-input chk" type="checkbox" value="" id="flexCheckDefault" />
                                            <h6 className='cont-tab'>Mohamed Badiane</h6>
                                        </div>
                                    </th>
                                    <td className='cont-tab'>Designer</td>
                                    <td className='cont-tab'>Metha Design</td>
                                    <td className='cont-tab'>Metha@test.sn</td>
                                    <td className='cont-tab'>+221 777 77 77</td>
                                    <td className='cont-tab'>Dakar</td>
                                    <td className='actions'>
                                        <i class="fa fa-trash" aria-hidden="true"></i>
                                        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                    </td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
