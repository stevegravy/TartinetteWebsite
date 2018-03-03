import React, { Component } from 'react';
import ConnexionBouton from '../components/ConnexionBouton';
import PanicBouton from "../components/PanicBouton";

//import CSS
import './Accueil.css'

//import images
import tartinette from '../images/tartinette.png';
import logo_tartine_rond_vert from '../images/logo_tartine_rond_vert.png';
import frigo from '../images/frigo.png';
import boiteatartines from '../images/boiteatartines.png';
import tartine from '../images/tartine.png';
import ordinateur from '../images/ordinateur.png';
import logo_ecole_saint_henri from '../images/logo_ecole_saint_henri.png';
import legumes_vert from '../images/legumes_vert.png';


class Accueil extends React.Component {
    render() {
        return(
            <div className="accueil">
                <div className="header">
                    <div className="logoBanniereTartinette">
                        <img class="responsive-img" src={logo_tartine_rond_vert} alt="logo tartinette"/>
                        <img class="responsive-img" src={tartinette} alt="tartinette" className="tartinette"/>
                    </div>
                </div>
                <div className="main_content">
                    <div className="accueilParagraphe1">
                        <h1 className="textInRed">No pic-nic? No panic!</h1>
                        <h2><span className="textInRed">Inscrivez-vous</span> et commandez quand vous voulez!</h2>
                        <ConnexionBouton/>
                        <h3><span className="textInRed">Pour demain?</span> Pas de problème <br/>
                            Commande possible jusqu'a 8 heure, le matin même.</h3>
                        <PanicBouton/>
                    </div>
                    <div className="accueilParagraphe2">
                        <div className="iconeParagraphe">
                            <img class="responsive-img" src={frigo} alt="image frigo" className="frigo"/>
                            <h4 className="textInRed">Frigo vide?</h4>
                            <p>Le jambon est vert? Le pain est poilu? <br/>
                                La salade est blette? Pas de soucis!</p>
                        </div>
                        <div className="iconeParagraphe">
                            <img class="responsive-img" src={ordinateur} alt="image ordinateur" className="ordinateur"/>
                            <h4 className="textInRed">Relax Max!</h4>
                            <p>Prenez notre formule abonnement et<br/>
                                commandez comme bon vous semble.<br/>
                                Fini les boîtes à tartines...</p>
                        </div>
                        <div className="iconeParagraphe">
                            <img class="responsive-img" src={boiteatartines} alt="image boite à tartines" className="boitetartines"/>
                            <h4 className="textInRed">Fini la boîte</h4>
                            <p>Du sain, du local, de saison, du frais!<br/>
                                Que du bon pour vos enfants...
                            </p>
                        </div>
                        <div className="iconeParagraphe">
                            <img class="responsive-img" src={tartine} alt="image tartin" className="tartine"/>
                            <h4 className="textInRed">Testé et approuvé!</h4>
                            <p>Notre concept a été testé et approuvé<br/>
                                par les enfants et les parents de<br/>
                                l'école Saint-Henri...</p>
                        </div>
                    </div>
                    <div className="accueilParagraphe3">
                        <img class="responsive-img" src={logo_ecole_saint_henri} alt="logo_ecole_saint_henri" className="logo_ecole_saint_henri"/>
                    </div>
                    <div className="footer">
                        <img class="responsive-img" src={legumes_vert} alt="image de légumes"/>
                        <p className="footer">Copyright © tartinette.be 2018</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Accueil;



