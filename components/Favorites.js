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
                style={{backgroundColor: "#FAF7F7", color: "black", borderColor: "#DC706C", borderWidth: "0.12rem 0"}}
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
                backgroundColor: '#BF0101',
                width: "100%",
                borderRadius: "0",
                margin: "0 0 1.5vw 0"
            }}
            showStyles={{
                backgroundColor: "#BF0101",
                border: "none",
                float: "left",
                marginLeft: "1rem",
                padding: "0.5rem 0"
            }}
            colStyles={{
                backgroundColor: "#BF0101",
                border: "none",
                float: "right",
                marginRight: "1rem",
                padding: "0.5rem 0"
            }}
        />
    )
}

export default Favorites;