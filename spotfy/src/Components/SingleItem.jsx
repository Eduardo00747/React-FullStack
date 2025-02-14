import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SingleItem = ({ image, name, artist, isArtist, idPath, id }) => {
    return (
        <Link to={`${idPath}/${id}`} className="single-item">
            <img className="single-item__image" src={image} alt={name} />

            <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />

            <div className="single-item__texts">
                <p className="single-item__title">{name}</p>
                <p className="single-item__artist">
                    {isArtist ? "Artista" : artist}
                </p>
            </div>
        </Link>
    );
};

export default SingleItem;
