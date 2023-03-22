import favorites from '../sample-data/sample-favorites.js';
import { useState, useEffect } from 'react';
import HigherOrderList from './higherOrderList.js';

const Favorites = () => {
    const FavoriteCard = (props) => {
        return (
            <div
                className="list-group-item list-group-item-action active"
                aria-current="true"

                style={{backgroundColor: "#69B578", color: "black", borderColor: "#467850"}}
            >
                <div>
                    <h5
                        className="mb-1"
                        style={{display: "inline"}}
                    >{props.fav.name}</h5>
                    <h6
                        style={{display: "inline", float: "right", fontWeight: "bold"}}
                    >{props.fav.rating}</h6>
                </div>
                <p className="mb-1">{props.fav.description}</p>
            </div>
        );
    }

    return (
        // <HigherOrderList Card={FavoriteCard} title='Favorite Activites'/>
        <p>hi</p>
    )
}

export default Favorites;