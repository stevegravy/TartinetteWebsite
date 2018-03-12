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
                    header='Inscription'
                    trigger={<Button waves='light'>Inscription</Button>}>
                    <Row>
                        <h3 className="bleu">Vous</h3>
                        <Input s={12} label="Votre nom" />
                        <Input s={12} label="Votre prénom" />
                        <Input type="email" label="Email" s={12} />
                        <Input type="password" label="Mot de passe" s={12} />
                        <Input type="password" label="Confirmation mot de passe" s={12} />
                        <h3 className="bleu">Votre tribu</h3>
                        <Input s={12} label="Nom de votre tribu" />
                        <div className="envoi">
                            <Button waves='light'>J'inscrit ma tribu !</Button>
                        </div>
                    </Row>
                </Modal>
            </div>
        )
    }
}

export default Inscription;



