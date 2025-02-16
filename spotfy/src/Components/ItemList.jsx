import React from "react";
import SingleItem from "./SingleItem";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";
import { Link, useLocation } from "react-router-dom";

const ItemList = ({ title, range, path, idPath }) => {
    let items = [];

    if (title === "Artistas") {
        items = artistArray.slice(0, 7);
    } else if (title === "Músicas") {
        items = songsArray.slice(0, 7);
    } else if (range) {
        items = songsArray.filter((song) => song.id >= range[0] && song.id <= range[1]);
    }

    const {pathname} = useLocation()

    const isHome = pathname ==="/"

    const finalItems = isHome 
    ? items 
    : title === "Artistas" 
        ? artistArray // Mostra todos os artistas se estiver na página Artists
        : songsArray; // Mostra todas as músicas se estiver na página Songs


    return (
        <div className="itemlist">
            {title && (
                <div className="main__texts">
                    <h2>{title} Populares</h2>

                    {isHome ? 
                        <Link to = {path} className="main__link">
                            Mostra Tudo
                        </Link>
                    :<></>}
                </div>
            )}
            <div className="item-list__container">
                {finalItems.map((item) => (
                    <SingleItem
                        idPath={idPath}
                        id={item.id}
                        key={item.id}
                        image={item.image}
                        name={item.name}
                        artist={title === "Artistas" ? null : item.artist}
                        isArtist={title === "Artistas"}
                    />
                ))}
            </div>
        </div>
    );
};

export default ItemList;