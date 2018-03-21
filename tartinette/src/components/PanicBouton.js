import React, { Component } from 'react';
import {Button, Modal, Row, Input} from 'react-materialize';
//CSS
import './PanicBouton.css';

class PanicBouton extends React.Component {

    constructor(props) {
        super(props);
        this.state={name: '', password: ''};

        /*  this.handleChangeName = this.handleChangeName.bind(this);
          this.handleChangePassword = this.handleChangePassword.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);*/
    }

    handleChange(e){
        var change = {}
        change[e.target.name] = e.target.value
        this.setState(change)
    }

    handleSubmit(event){
        alert('Bienvenue ' + this.state.name);
        event.preventDefault();
    }

    render() {
        return(
            <div className="PanicBouton">
                <Modal
                    className = "connexion_modal"
                    header='Connectez-vous'
                    trigger={<Button waves='light'>Panic!</Button>}>
                    <Row>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <Input s={6} label="Nom d'utilisateur" />
                            <Input type="password" label="Mot de passe" s={6} />
                            <div className="envoi">
                                <Button waves='light'>Confirmer</Button>
                            </div>
                        </form>
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



