import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import loggo from './logo.png';

const Logo = () => {
    return (
        <div className='ma4 nt0'>
            <Tilt className="Tilt br4 shadow-4" options={{ max: 45 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3"> <img alt='BocoloLogo' src={loggo}/> </div>
            </Tilt>
        </div>
    );
}
export default Logo;