import React from 'react';
import './Header.css'
//Image
import tartinette from '../images/tartinette.png';
import Logo_Tartinette from '../images/Logo_Tartinette.png';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="logoBanniereTartinette">
                    <img class="responsive-img" src={Logo_Tartinette} alt="logo tartinette"/>
                    <img class="responsive-img" src={tartinette} alt="tartinette" className="tartinette"/>
                </div>
            </div>
        )
    }
}

export default Header;

