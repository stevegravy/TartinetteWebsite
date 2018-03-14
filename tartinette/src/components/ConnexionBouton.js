import React, { Component } from 'react';
import {Button, Modal, Row, Input} from 'react-materialize';
//CSS
import './ConnexionBouton.css';

class ConnexionBouton extends React.Component {

    constructor(props) {
        super(props);
        this.state={name: '', password: ''};

      /*  this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);*/
    }

    handleChangeName(event){
        this.setState({name: event.target.value});
    }

    handleChangePassword(event){
        this.setState({password: event.target.value});
    }

    handleSubmit(event){
        alert('Bienvenue ' + this.state.name);
        event.preventDefault();
    }
    render() {
        return(
            <div className="connexionbouton">
                <Modal
                    className = "connexion_modal"
                    header='Connectez-vous'
                    trigger={<Button waves='light'>Commander</Button>}>
                    <Row>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <Input s={6} label="Nom d'utilisateur" type="text" value={this.state.name} onChange={this.handleChangeName.bind(this)} required/>
                            <Input s={6} label="Mot de passe" type="password" value={this.state.password} onChange={this.handleChangePassword.bind(this)} required/>
                            <div className="envoi">
                                <Button waves='light' type="submit" value="Submit">Confirmer</Button>
                            </div>
                        </form>
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



