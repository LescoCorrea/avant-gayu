import React from 'react'
import './Contacts.css'

export default function Contacts() {
    return (
        <div>
            <div className="container">
                <h1 className='title-serv'>Contactez - nous</h1>
                <p className='par-serv'>
                    Merci de votre intérêt pour la plateforme Gayu. Complétez le formulaire<br /> ci-dessous et certains vous contacteront sous peu.
                </p>
                <div className='row mt-5'>
                    <div className='col mb-5'>
                        <div className="form-container">
                            <form>
                                <div>
                                    <input type="text" className="form-control mt-3" name="name" id="name" placeholder="Nom*" />
                                </div>
                                <div>
                                    <input type="text" className="form-control mt-3" name="name" id="name" placeholder="E-mail*" />
                                </div>
                                <div>
                                    <textarea className='form-control mt-3' name="" id="" cols="47.5" rows="7" placeholder='Entrez votre message ici'></textarea>
                                </div>
                                <div className="profile-contact mt-5">
                                    <div className='link-contact'>
                                        <a href="/#" className='serv-prop'>Soumettre</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col col-bg">
                        <div className='par-contact'>
                            <p className='paragraph-contact'>
                                Lorem ipsum dolor sit amet consectetur. In magna vel convallis in tortor dictumst donec. Non cursus magna et tellus vitae est. Netus venenatis tempor sed in.
                                Sed at ut amet ultricies turpis parturient etiam viverra. Magna sit varius amet.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
