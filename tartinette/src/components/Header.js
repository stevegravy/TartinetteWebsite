import React from 'react';
/*
import './Header.css'
*/
//Image
import tartinette from '../images/tartinette.png';
import Logo_Tartinette from '../images/Logo_Tartinette.png';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="logoBanniereTartinette">
                    <img className="responsive-img" src={Logo_Tartinette} alt="logo tartinette"/>
                    <img className="responsive-img tartinette" src={tartinette} alt="tartinette"/>
                </div>
                <div className="tagline">
                    <h1 className="taglineTitle">Un pic-nic sain pour votre enfant livré dans sa classe</h1>
                </div>
            </div>
        )
    }
}

export default Header;

