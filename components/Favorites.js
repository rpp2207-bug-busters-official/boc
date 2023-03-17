import favorites from '../sample-data/sample-favorites.js';

const Favorites = () => {
    
    return (
        <div className="list-group" style={{backgroundColor: "#69B578", width: "20rem"}}>
            <h3 style={{textAlign: "center"}}>Favorites</h3>
            {favorites.map((fav, key) => {
                return (
                    <div>
                        <div>
                            <h3 style={{display: "inline"}}>{fav.name}</h3>
                            <h5 style={{display: "inline"}}>{fav.rating}</h5>
                        </div>
                        <p>{fav.description}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Favorites;