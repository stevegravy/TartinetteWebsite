import React, { Component } from 'react';
import './App.css';
// Component
import Accueil from './layout/Accueil';
import NotFound from './layout/NotFound';
import Connexion from './layout/Connexion';
//CSS
//import './Assets/style.css';
// Rooter
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <div>
                <ul>
                    <li><Link to="/layout/Accueil">Accueil</Link></li>
                    <li><Link to="/layout/Commande">Commande</Link></li>
                    <li><Link to="/layout/ConfirmationCommande">Confirmation commande</Link></li>
                    <li><Link to="/layout/Connexion">Connexion</Link></li>
                    <li><Link to="/layout/Inscription">Inscription</Link></li>
                    <li><Link to="/layout/Loading">Loading</Link></li>
                    <li><Link to="/layout/NotFound">NotFound</Link></li>
                    <li><Link to="/layout/Paiement">Paiement</Link></li>
                    <li><Link to="/layout/PaiementPaypal">Paiement Paypal</Link></li>
                    <li><Link to="/layout/PaiementStripe">Paiement Stripe</Link></li>
                    <li><Link to="/layout/Tribu">Tribu</Link></li>
                    <li><Link to="/layout/Validation">Validation</Link></li>

                </ul>
                <hr/>
                <Switch>
                    <Route exact path='/layout/Accueil' component={Accueil}/>
                    <Route exact path='/layout/Connexion' component={Connexion}/>
                    <Route exact path='/layout/Commande' component={Commande}/>
                    <Route exact path='/layout/ConfirmationCommande' component={ConfirmationCommande}/>
                    <Route exact path='/layout/Inscription' component={Inscription}/>
                    <Route exact path='/layout/Loading' component={Loading}/>
                    <Route exact path='/layout/Paiement' component={Paiement}/>
                    <Route exact path='/layout/PaiementPaypal' component={PaiementPaypal}/>
                    <Route exact path='/layout/PaiementStripe' component={PaiementStripe}/>
                    <Route exact path='/layout/Tribu' component={Tribu}/>
                    <Route exact path='/layout/Validation' component={Validation}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        </Router>
    )
}

export default App;
