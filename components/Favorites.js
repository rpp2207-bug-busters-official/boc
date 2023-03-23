import favorites from '../sample-data/sample-favorites.js';
import { useState, useEffect } from 'react';
import HigherOrderList from './higherOrderList.js';

const Favorites = () => {
    const FavoriteCard = (props) => {
        return (
            <div
                className="list-group-item list-group-item-action active"
                aria-current="true"
                key={props.setKey}
                style={{backgroundColor: "#69B578", color: "black", borderColor: "#467850"}}
            >
                <div>
                    <h5
                        className="mb-1"
                        style={{display: "inline"}}
                    >{props.act.name}</h5>
                    <h6
                        style={{display: "inline", float: "right", fontWeight: "bold"}}
                    >{props.act.rating}</h6>
                </div>
                <p className="mb-1">{props.act.description}</p>
            </div>
        );
    }

    return (
        <HigherOrderList Card={FavoriteCard} title='Favorites'/>
    )
}

export default Favorites;