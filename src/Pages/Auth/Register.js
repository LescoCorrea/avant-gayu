import React from 'react'
import './Register.css'

export default function Register() {
    return (
        <div>
            <div className='container-login'>
                <div className='login-container'>
                    <form className='form-regis'>
                        <div>
                            <h1 className='titre-con text-center'>Inscription</h1>
                        </div>
                        <div className="form-outline mb-4">
                            <input type="email" id="form2Example1" className="form-control input-text" placeholder='Prénom et Nom' />
                        </div>
                        <div className="form-outline mb-4">
                            <input type="email" id="form2Example1" className="form-control input-text" placeholder='Numéro de téléphone' />
                        </div>
                        <div className="form-outline mb-4">
                            <input type="email" id="form2Example1" className="form-control input-text" placeholder='Adresse Email' />
                        </div>
                        <div className="form-outline mb-4">
                            <input type="email" id="form2Example1" className="form-control input-text" placeholder='Adresse du domicile' />
                        </div>
                        <div className="form-outline mb-4">
                            <input type="password" id="form2Example2" className="form-control input-text" placeholder='Mot de passe' />
                        </div>
                        <div className="form-outline mb-4">
                            <input type="password" id="form2Example2" className="form-control input-text" placeholder='Confirmer mot de passe' />
                        </div>
                        <button type="button" className="btn btn-block btn-con mb-4 mt-5">CONNEXION</button>

                        <div className="">
                            <p className='par-con'>En créant un compte, vous acceptez <a href="/*" className='ins-con'>notre Politique de<br /> confidentialité</a> et nos <a href="#!" className='ins-con'>Conditions d’utilisation</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
