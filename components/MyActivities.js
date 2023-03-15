import activities from '../sample-data/sample-activities.js';

const MyActivities = () => {

  return (
    <div class="list-group">
      <h3 style={{ textAlign: "center" }}>My Reviews</h3>

      {activities.map((activity, key) => {
        return (
          <div class="list-group-item list-group-item-action active" aria-current="true" key={key} styles={{color: "red"}}>
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">{activity.place}</h5>
              <small>Date: {activity.date}</small>
            </div>
            <p class="mb-1">{activity.review}</p>
            <small>Rating: {activity.rating}</small>
          </div>
        )
      })}
    </div>
  );

}

export default MyActivities;