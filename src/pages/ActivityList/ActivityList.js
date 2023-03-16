var queryURL = 'https://cors-anywhere.herokuapp.com/';
const yelpAPI = 'a6Z4f3lHkBOQBPImRcYCx2I8L9uqflZEpSz_mG9bZwmTqM6qFrPJiRdtjH0xjDmx7Hi0W0Dm_k30n8sPTyv9LdMHscP65v6775Ov3HrUvYeCtgPPfkmOCAtvWNQMZHYx'

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
    .catch(err => console.error(err));
  };

export default function ActivityList(props) {
  return (
    <button onClick={getNearbyActivities}>Make API Call</button>
  )
}