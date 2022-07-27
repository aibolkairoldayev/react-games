import React from "react";
import { Link } from "react-router-dom";

function GameBlock({ name, slug, released, rating, background_image, platforms, id }) {

    return (
        <div className="gameItem" >
            <div className="gameImg">
                <img src={background_image} alt="" />
            </div>
            <div className="gameInfo">
                <div className="gameName">
                    <Link to={`/${slug}`}>{name}</Link>
                </div>
                <div className="gameText">
                    <div className="rating">{rating}</div>
                    <div className="date">{released}</div>
                </div>
            </div>
        </div>

    )
}

export default GameBlock;