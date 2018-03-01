import React, { Component } from 'react';
import CommandeBouton from '../components/CommandeBouton';
import PanicBouton from "../components/PanicBouton";
import Footer from "../components/Footer";
//import images
import tartinette from '../images/tartinette.png';
import logo_tartine_rond_vert from '../images/logo_tartine_rond_vert.png';
import frigo from '../images/frigo.png';
import boiteatartines from '../images/boiteatartines.png';
import tartine from '../images/tartine.png';
import ordinateur from '../images/ordinateur.png';
import logo_ecole_saint_henri from '../images/logo_ecole_saint_henri.png';


class Accueil extends React.Component {
    render() {
        return(
            <div className="accueil">
                <div className="header">
                    <div className="banniereLogo">
                        <div className="logoBanniereTartinette">
                            <img src={logo_tartine_rond_vert} alt="logo tartinette"/>
                            <img src={tartinette} alt="tartinette" className="tartinette"/>
                        </div>
                    </div>
                </div>
                <div className="main_content">
                    <div className="accueilParagraphe1">
                        <h1 className="couleurPasCTA">No pic-nic? No panic!</h1>
                        <p>Inscrivez-vous et commandez quand vous voulez!</p>
                        <CommandeBouton/>
                        <p>Pour demain? Pas de problème <br/>
                            Commande possible jusqu'a 8 heure, le matin même.</p>
                        <PanicBouton/>
                    </div>
                    <div className="accueilParagraphe2">
                        <div className="frigoParagraphe">
                            <img src={frigo} alt="image frigo" className="frigo"/>
                            <h2 className="accueilParagraphe2">Frigo vide?</h2>
                            <p>Le jambon est vert? Le pain est poilu? <br/>
                                La salade est blette? Pas de soucis!</p>
                        </div>
                        <div className="ordinateurParagraphe">
                            <img src={ordinateur} alt="image ordinateur" className="ordinateur"/>
                            <h2 className="accueilParagraphe2">Relax Max!</h2>
                            <p>Prenez notre formule abonnement et<br/>
                                commandez comme bon vous semble.<br/>
                                Fini les boîtes à tartines...</p>
                        </div>
                        <div className="boiteTartinesParagraphe">
                            <img src={boiteatartines} alt="image boite à tartines" className="boitetartines"/>
                            <h2 className="accueilParagraphe2">Fini la boîte</h2>
                            <p>Prenez notre formule abonnement etDu sain, du local, de saison, du frais!<br/>
                                Que du bon pour vos enfants...
                            </p>
                        </div>
                        <div className="taretineParagraphe">
                            <img src={tartine} alt="image tartin" className="tartine"/>
                            <h2 className="accueilParagraphe2">Testé et approuvé!</h2>
                            <p>Notre concept a été testé et approuvé<br/>
                                par les enfants et les parents de<br/>
                                l'école Saint-Henri...</p>
                        </div>
                    </div>
                    <div className="accueilParagraphe3">
                        <img src={logo_ecole_saint_henri} alt="logo_ecole_saint_henri" className="logo_ecole_saint_henri"/>
                    </div>
                    <Footer/>
                </div>
            </div>
        )
    }
}

export default Accueil;



