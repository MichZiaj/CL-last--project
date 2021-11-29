import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import {Link} from "react-router-dom";
import logo2 from '../../images/logo2.png'
import logo from '../../images/logo.png';


export default function BasicMenu() {


    return (
        <div className="header__container">
            <div className="container">
                <div className="text__container">

                    <Link className='logo__container' to="/">
                        <h1 className="logo__text">Barbeer Żiżą</h1>
                    </Link>

                <ul className="nav__list">
                    <MenuItem className="list__element" style={{"display": "inline-block"}}><Link to="/cennik">Cennik</Link></MenuItem>
                    <MenuItem className="list__element" style={{"display": "inline-block"}}><Link to="/omnie">O mnie</Link></MenuItem>
                    <MenuItem className="list__element" style={{"display": "inline-block"}}><Link to="/galeria">Galeria</Link></MenuItem>
                    <MenuItem className="list__element" style={{"display": "inline-block"}}><Link to="/kontakt">Kontakt</Link> </MenuItem>
                </ul>
                    </div>
            </div>
        </div>
    );
}

