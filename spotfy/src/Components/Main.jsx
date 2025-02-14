import React from "react";
import ItemList from "./ItemList";

const Main = () => {
    return (
        <div className="main">
            <ItemList
                title="Artistas"
                path = "/artists"
                idPath = "/artist"
            />
            <ItemList
                title="Músicas"
                path= "/songs"
                idPath="/song"
            />
            <ItemList
                range={[8, 14]}
                idPath = "/song"
            />
        </div>
    );
};

export default Main;
