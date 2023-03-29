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
                style={{backgroundColor: "#F5BB00", color: "black", borderColor: "#BD9002"}}
            >
                <div>
                    <h5
                        className="mb-1"
                        style={{display: "inline", fontSize: "1.5rem"}}
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
        <HigherOrderList
            Card={FavoriteCard}
            title='Favorite Activities'
            colorA='#BD9002'
            colorB='#F5BB00'
            mainStyles={{
                backgroundColor: '#BD9002',
                width: "100%",
                maxWidth: "90vw",
                margin: "0.5rem 0"
            }}
            showStyles={{
                backgroundColor: "#BD9002",
                border: "none",
                float: "left",
                marginLeft: "1rem",
                padding: "0.5rem 0"
            }}
            colStyles={{
                backgroundColor: "#BD9002",
                border: "none",
                float: "right",
                marginRight: "1rem",
                padding: "0.5rem 0"
            }}
        />
    )
}

export default Favorites;