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
                style={{backgroundColor: "#FF5533", color: "white", border: "1px solid black"}}
            >
                <div>
                    <h5
                        className="mb-1"
                        style={{fontSize: "1.3rem"}}
                    >{props.act.activity_name}</h5>
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
                backgroundColor: 'white',
                width: "100%",
                borderRadius: "8px",
                margin: "0 0 1.5vw 0",
                border: "2px solid black"
            }}
            showStyles={{
                backgroundColor: "white",
                border: "none",
                float: "left",
                marginLeft: "1rem",
                padding: "0.5rem 0",
                color: "black"
            }}
            colStyles={{
                backgroundColor: "white",
                border: "none",
                float: "right",
                marginRight: "1rem",
                padding: "0.5rem 0",
                color: "black"
            }}
        />
    )
}

export default Favorites;