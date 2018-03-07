import React, { Component } from 'react';
import {Button, Modal, Row, Input} from 'react-materialize';
//CSS
import './PanicBouton.css';

class PanicBouton extends React.Component {

    render() {
        return(
            <div className="PanicBouton">
                <Modal
                    className = "connexion_modal"
                    header='Connectez-vous'
                    trigger={<Button waves='light'>Panic!</Button>}>
                    <Row>
                        <Input s={6} label="Nom d'utilisateur" />
                        <Input type="password" label="Mot de passe" s={6} />
                        <div className="envoi">
                            <Button waves='light'>Confirmer</Button>
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

export default PanicBouton;



