import React from 'react'
import './LogReg.css'

export default function Login() {
    return (
        <div className='container-logins'>
            <div className='login-containers'>
                <form>
                    <div>
                        <h1 className='titre-con'>Connexion</h1>
                    </div>
                    <div className="form-outline mb-4">
                        <input type="email" id="form2Example1" className="form-control input-text" placeholder='Nom utilisateur ou numéro de téléphone' />
                    </div>

                    <div className="form-outline mb-4">
                        <input type="password" id="form2Example2" className="form-control input-text" placeholder='Mot de passe' />
                    </div>

                    <button type="button" className="btn btn-block btn-con mb-4 mt-5">CONNEXION</button>

                    <div className="">
                        <p className='par-con'>Vous n'avez pas de compte ? <a href="/register" className='ins-con'>Inscrivez vous</a></p>
                    </div>
                </form>
            </div>
        </div>
    )
}
