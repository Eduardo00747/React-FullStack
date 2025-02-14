import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <Link>
                <img src="src\assets\logo\spotify-logo.png" alt="Logo do Spotify" />
            </Link>
            
            <Link to="/"className= "header__link" >
                <h1>Spotify</h1>              
            </Link>

        </div>
    )
}

export default Header