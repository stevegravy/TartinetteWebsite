import React, { Component } from 'react';
import {Button, Modal, Row, Input} from 'react-materialize';
import {Link} from 'react-router-dom';
//CSS
import './ConnexionBouton.css';

class ConnexionBouton extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            name: '',
            password: ''
        };
    }

    handleChange(e){
        var change = {}
        change[e.target.name] = e.target.value
        this.setState(change)
    }
    //Vérification login
    handleSubmit(e){
        var x = document.forms["loginForm"] ["name"] ["password"].value();
        if (x==true){
            alert('Bienvenue ' + this.state.name);
            href={'/InscriptionEnfant'},
            e.preventDefault();
        }
        else{
            alert("Nom d'utilisateur ou mot de passe incorrect");
            e.preventDefault();
        }
    }

    render() {
        return(
            <div name="connexionbouton">
                <Modal
                    className = "connexion_modal"
                    header='Connectez-vous'
                    trigger={<Button waves='light'>Commander</Button>}>
                    <Row>
                        <form className="loginForm" onSubmit={this.handleSubmit.bind(this)} method="post">
                            <Input s={6} label="Nom d'utilisateur" type="text" name="name" value={this.state.name} onChange={this.handleChange.bind(this)} required/>
                            <Input s={6} label="Mot de passe" type="password" name="password" value={this.state.password} onChange={this.handleChange.bind(this)} required/>
                            <div className="envoi">
                                <Button waves='light' type="submit" value="Submit">Confirmer</Button>
                            </div>
                        </form>
                    </Row>
                    <div className="oubliMotDePasse">
                        <p className="lien_mdpOublie"><a href="./InscriptionBouton.js">Mot de passe oublié?</a></p>
                    </div>
                    <div className="inscription">
                        <p className="lien_inscription"><a href="./InscriptionEnfant.js">Pas encore inscrit?</a></p>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default ConnexionBouton;



