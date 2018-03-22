import React from 'react';
import legumes_vert from '../images/legumes_vert.png';
import './Footer';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <img className="responsive-img" src={legumes_vert} alt="image de légumes"/>
                <p className="footer">Copyright © tartinette.be 2018</p>
            </div>
        )
    }
}

export default Footer;

