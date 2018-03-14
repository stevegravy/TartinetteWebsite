import React, { Component } from 'react';
import ConnexionBouton from '../components/ConnexionBouton';
import PanicBouton from "../components/PanicBouton";
import {Row, Input, Button} from 'react-materialize';
//Component
import Footer from "../components/Footer";
import Header from "../components/Header";
//import CSS
import './Accueil.css'

//import images
import frigo from '../images/frigo.png';
import boiteatartines from '../images/boiteatartines.png';
import tartine from '../images/tartine.png';
import ordinateur from '../images/ordinateur.png';
import logo_ecole_saint_henri from '../images/logo_ecole_saint_henri.png';


class Accueil extends React.Component {
    render() {
        return(
            <div className="accueil">
                <Header/>
                <div className="main_content">
                    <div className="accueilParagraphe1">
                        <div className="border_bottom">
                            <h2 className="padding_bottom"><span className="textInColor">Inscrivez-vous</span> et commandez quand vous voulez!</h2>
                            <ConnexionBouton/>
                        </div>
                        <h3 className="margin_top"><span className="textInColor">Pour demain?</span> Pas de problème <br/>
                            Commande possible jusqu'a 8 heure, le matin même.</h3>
                        <PanicBouton/>
                    </div>
                    <div className="accueilParagraphe2">
                        <div className="iconeParagraphe">
                            <img class="responsive-img" src={frigo} alt="image frigo" className="frigo"/>
                            <h4 className="textInColor">Frigo vide?</h4>
                            <p>Le jambon est vert? Le pain est poilu? <br/>
                                La salade est blette? Pas de soucis!</p>
                        </div>
                        <div className="iconeParagraphe">
                            <img class="responsive-img" src={ordinateur} alt="image ordinateur" className="ordinateur"/>
                            <h4 className="textInColor">Relax Max!</h4>
                            <p>Prenez notre formule abonnement et<br/>
                                commandez comme bon vous semble.<br/>
                                Fini les boîtes à tartines...</p>
                        </div>
                        <div className="iconeParagraphe">
                            <img class="responsive-img" src={boiteatartines} alt="image boite à tartines" className="boitetartines"/>
                            <h4 className="textInColor">Fini la boîte</h4>
                            <p>Du sain, du local, de saison, du frais!<br/>
                                Que du bon pour vos enfants...
                            </p>
                        </div>
                        <div className="iconeParagraphe">
                            <img class="responsive-img" src={tartine} alt="image tartin" className="tartine"/>
                            <h4 className="textInColor">Testé et approuvé!</h4>
                            <p>Notre concept a été testé et approuvé<br/>
                                par les enfants et les parents de<br/>
                                l'école Saint-Henri...</p>
                        </div>
                    </div>
                    <Row className="contact">
                        <h4 className="titreContact">Vous pouvez nous contacter si besoin:</h4>
                        <Input s={6} label="Prénom" required />
                        <Input s={6} label="Nom" required />
                        <Input type="email" label="Email" s={12} required />
                        <Input type='textarea' label="Votre message" s={12} required />
                        <Button waves='light'>Envoyer</Button>
                    </Row>
                    <div className="accueilParagraphe3">
                        <img class="responsive-img" src={logo_ecole_saint_henri} alt="logo_ecole_saint_henri" className="logo_ecole_saint_henri"/>
                    </div>
                    <Footer/>
                </div>
            </div>
        )
    }
}

export default Accueil;



