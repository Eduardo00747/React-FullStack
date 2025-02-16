import React from "react";
import ItemList from "./ItemList";

const Main = ({ type }) => {
    return (
        <div className="main">
            {/* Renderiza Artistas se type for 'artists' ou se não houver type definido */}
            {(type === "artists" || !type) && (
                <ItemList 
                    title="Artistas"
                    path="/artists"
                    idPath="/artist"
                />
            )}

            {/* Renderiza Músicas se type for 'songs' ou se não houver type definido */}
            {(type === "songs" || !type) && (
                <>
                    <ItemList
                        title="Músicas"
                        path="/songs"
                        idPath="/song"
                    />
                    
                    <ItemList
                        range={[8, 14]}
                        idPath="/song"
                    />
                </>
            )}
        </div>
    );
};

export default Main;
