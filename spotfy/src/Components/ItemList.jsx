import React from "react";
import SingleItem from "./SingleItem";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";
import { Link } from "react-router-dom";

const ItemList = ({ title, range, path, idPath }) => {
    let items = [];

    if (title === "Artistas") {
        items = artistArray.slice(0, 7);
    } else if (title === "Músicas") {
        items = songsArray.slice(0, 7);
    } else if (range) {
        items = songsArray.filter((song) => song.id >= range[0] && song.id <= range[1]);
    }

    return (
        <div className="itemlist">
            {title && (
                <div className="main__texts">
                    <h2>{title} Populares</h2>
                    <Link to = {path} className="main__link">Mostra Tudo</Link>
                </div>
            )}
            <div className="item-list__container">
                {items.map((item) => (
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
