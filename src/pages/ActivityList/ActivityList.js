import Activity from './Activity.js';
import { useState, useEffect } from 'react';


export default function ActivityList(props) {
  const [activities, setActivities] = useState([]);
  const [latitude, setLatitude] = useState(props.latitude);
  const [longitude, setLongitude] = useState(props.longitude);

  var queryURL = 'https://cors-anywhere.herokuapp.com/';
  const yelpAPI = process.env.NEXT_PUBLIC_YELP_KEY;

  const getNearbyActivities = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${yelpAPI}`
      }
    };

     fetch(`${queryURL}https://api.yelp.com/v3/businesses/search?latitude=${latitude}&longitude=${longitude}&radius=1000&categories=&locale=en_US&open_now=true&sort_by=distance&device_platform=mobile-generic&limit=5`, options)
       .then(response => response.json())
       .then(response => {setActivities(response.businesses)})
       .catch(err => console.error(err));
  };

  useEffect(() => {
    setLatitude(props.latitude);
    setLongitude(props.longitude);
    getNearbyActivities()
      .then(() => {
        console.log('Current Activities', activities)
      })
  }, [props.latitude, props.longitude])


  return (
    <div className="activity-list">
      Activity List
      {activities.map((activity) => {
        return (
          <Activity action={activity} key={activity.id}/>
        );
      })}
    </div>
  )
}
