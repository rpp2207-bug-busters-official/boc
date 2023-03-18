import activities from '../sample-data/sample-activities.js';
import MyActivityReview from './MyActivityReview.js';

const MyActivities = () => {

  return (

    <div className="list-group" style={{backgroundColor: "#f2c329", width: "20rem"}} >
      <h3 style={{ textAlign: "center" }}>My Activities</h3>

      {activities.map((activity, key) => {
        return (
          <div className="list-group-item list-group-item-action active" aria-current="true" key={key} style={{backgroundColor: "#f2c329", color: "black", borderColor: "black"}} >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{activity.place}</h5>
              <small>{activity.date}</small>
            </div>
            <p className="mb-1">{activity.review}</p>
            <p onClick={() => console.log('clicled')} className="mb-1">my review</p>
            {/* <button className="mb-1">my review</button> */}
            <small>Rating: {activity.rating}</small>
          </div>
        )
      })}


    </div>

  );

}

export default MyActivities;