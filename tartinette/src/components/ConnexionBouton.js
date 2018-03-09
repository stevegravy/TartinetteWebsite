import React, { Component } from 'react';
import {Button, Modal, Row, Input} from 'react-materialize';
//CSS
import './ConnexionBouton.css';

class ConnexionBouton extends React.Component {
    render() {
        return(
            <div className="connexionbouton">
                <Modal
                    className = "connexion_modal"
                    header='Connectez-vous'
                    trigger={<Button waves='light'>Commander</Button>}>
                    <Row>
                        <Input s={6} label="Nom d'utilisateur" />
                        <Input type="password" label="Mot de passe" s={6} />
                        <div className="envoi">
                            <Button waves='light'>Confirmer</Button>
                        </div>
                    </Row>
                    <div className="oubliMotDePasse">
                        <p className="lien_mdpOublie"><a href="./InscriptionBouton.js">Mot de passe oublié?</a></p>
                    </div>
                    <div className="inscription">
                        <p className="lien_inscription"><a href="./InscriptionBouton.js">Pas encore inscrit?</a></p>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default ConnexionBouton;



