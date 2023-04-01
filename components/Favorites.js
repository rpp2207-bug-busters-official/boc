import favorites from '../sample-data/sample-favorites.js';
import { useState, useEffect } from 'react';
import HigherOrderList from './higherOrderList.js';


const Favorites = () => {
    const FavoriteCard = (props) => {
        return (
            <div
                className="list-group-item list-group-item-action active card-component-coloring"
                aria-current="true"
                key={props.setKey}
                style={{backgroundColor: "#FAF7F7", color: "black", borderColor: "#706B71", borderWidth: "0.12rem 0"}}
            >
                <div>
                    <h5
                        className="mb-1"
                        style={{fontSize: "1.3rem"}}
                    >{props.act.name}</h5>
                    <h6
                        style={{fontSize: "1.1rem"}}
                    >{props.act.address} {props.act.city}</h6>
                </div>
            </div>
        );
    }

    return (
        <HigherOrderList
            Card={FavoriteCard}
            title='Favorites'
            mainStyles={{
                background: 'linear-gradient(0.25turn, #E23B4B, 10%, #E66B4B, #E23B4B)',
                width: "100%",
                borderRadius: "1%",
                margin: "0 0 1.5vw 0"
            }}
            showStyles={{
                background: 'linear-gradient(0.25turn, #E34B4B, #E55B4B)',
                border: "none",
                float: "left",
                marginLeft: "1rem",
                padding: "0.25rem 0"
            }}
            colStyles={{
                background: 'linear-gradient(0.25turn, #E34B4B, #E23B4B)',
                border: "none",
                float: "right",
                marginRight: "1rem",
                padding: "0.5rem 0"
            }}
        />
    )
}

export default Favorites;