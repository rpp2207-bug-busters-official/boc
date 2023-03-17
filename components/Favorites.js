import favorites from '../sample-data/sample-favorites.js';

const Favorites = () => {
    
    return (
        <div className="list-group" style={{backgroundColor: "#69B578", width: "20rem"}}>
            <h3 style={{textAlign: "center"}}>Favorites</h3>
            {favorites.map((fav, key) => {
                return (
                    <div 
                        className="list-group-item list-group-item-action active"
                        aria-current="true"
                        key={key}
                        style={{backgroundColor: "#69B578", color: "black", borderColor: "black"}}
                    >
                        <div>
                            <h5 className="mb-1" style={{display: "inline"}}>{fav.name}</h5>
                            <h6 style={{display: "inline", float: "right"}}>{fav.rating}</h6>
                        </div>
                        <p className="mb-1">{fav.description}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Favorites;