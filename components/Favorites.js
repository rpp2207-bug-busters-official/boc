import favorites from '../sample-data/sample-favorites.js';
import { useState, useEffect } from 'react';

const Favorites = () => {
    let [allFav, setAllFav] = useState([]);
    let [rendered, setRendered] = useState([]);

    var showMore = () => {
        let al = allFav.length;
        let rl = rendered.length;
        if (al - rl <= 4) {
            setRendered(allFav);
        } else {
            setRendered([
                ...rendered,
                allFav[rl],
                allFav[rl+1],
                allFav[rl+2],
                allFav[rl+3]
            ]);
        }
    }

    var collapse = () => {
        setRendered([
            allFav[0],
            allFav[1],
            allFav[2],
            allFav[3]
        ]);
    }

    useEffect(() => {
        setAllFav(favorites);
        if (favorites.length > 4) {
            setRendered([
                favorites[0],
                favorites[1],
                favorites[2],
                favorites[3]
            ]);
        } else {
            setRendered(favorites);
        }
    }, [favorites])

    return (
        <div className="list-group" style={{backgroundColor: "#69B578", width: "20rem"}}>
            <h3 style={{textAlign: "center"}}>Favorites</h3>
            {rendered.map((fav, key) => {
                return (
                    <div 
                        className="list-group-item list-group-item-action active"
                        aria-current="true"
                        key={key}
                        style={{backgroundColor: "#69B578", color: "black", borderColor: "black"}}
                    >
                        <div>
                            <h5
                                className="mb-1"
                                style={{display: "inline"}}
                            >{fav.name}</h5>
                            <h6
                                style={{display: "inline", float: "right", fontWeight: "bold"}}
                            >{fav.rating}</h6>
                        </div>
                        <p className="mb-1">{fav.description}</p>
                    </div>
                );
            })}
            {rendered.length < allFav.length ? 
                <button onClick={showMore}>Show More</button>
            : null}
            {rendered.length > 4 ?
                <button onClick={collapse}>Collapse</button>
            : null}
        </div>
    );
};

export default Favorites;