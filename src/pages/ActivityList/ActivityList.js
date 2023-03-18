import Activity from './Activity.js';
import {useState} from 'react';


export default function ActivityList(props) {
  const [activities, setActivities] = useState([]);
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

  fetch(`${queryURL}https://api.yelp.com/v3/businesses/search?latitude=34.0615895441259&longitude=-118.32138061523438&radius=400&categories=&locale=en_US&open_now=true&sort_by=distance&device_platform=mobile-generic&limit=5`, options)
    .then(response => response.json())
    .then(response => {console.log(response.businesses);
      setActivities(response.businesses)})
    .catch(err => console.error(err));
  };
  return (
    <div className="activity-list">
      Activity List
      <button onClick={getNearbyActivities}>Make API Call</button>
      {activities.map((activity) => {
        return (
          <Activity action={activity} key="me"/>
        );
      })}
    </div>
  )
}

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

  fetch(`${queryURL}https://api.yelp.com/v3/businesses/search?latitude=34.0615895441259&longitude=-118.32138061523438&radius=400&categories=&locale=en_US&open_now=true&sort_by=distance&device_platform=mobile-generic&limit=5`, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .then(response => setActivities(response.businesses))
    .catch(err => console.error(err));
  };