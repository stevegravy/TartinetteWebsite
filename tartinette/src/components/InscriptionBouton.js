import React, { Component } from 'react';
import {Button, Modal, Row, Input} from 'react-materialize';
//CSS
import './Inscription.css';

class Inscription extends React.Component {

    render() {
        return(
            <div className="Inscription">
                <Modal
                    className = "inscription_modal"
                    header='Inscrivez-vous'
                    trigger={<Button waves='light'>Inscription</Button>}>
                    <Row>
                        <h3 className="bleu">Vous</h3>
                        <Input s={12} label="Votre nom" />
                        <Input s={12} label="Votre prénom" />
                        <h3 className="bleu">Votre tribu</h3>
                        <Input s={12} label="Enfant 1" />
                        <Input s={12} label="Détails" Placeholder="Allergies, intolérences, spécificités,..."/>
                        <h3 className="bleu">Votre compte</h3>
                        <Input type="email" label="Email" s={12} />
                        <Input type="password" label="Mot de passe" s={12} />
                        <Input type="password" label="Confirmation mot de passe" s={12} />
                        <div className="envoi">
                            <Button waves='light'>Je m'inscris</Button>
                        </div>
                    </Row>
                    <div className="inscription">
                        <p className="lien_inscription"><a href="./InscriptionBouton.js">Inscrivez-vous</a></p>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default Inscription;



