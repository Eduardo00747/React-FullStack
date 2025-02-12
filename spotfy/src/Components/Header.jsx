import React from "react";

const Header = () => {
    return (
        <div className="header">
            <img src="src\assets\logo\spotify-logo.png" alt="Logo do Spotify" />
            <a className= "header__link" href="/">
                <h1>Spotify</h1>              
            </a>

        </div>
    )
}

export default Header