

// import Activity from '../../../components/Activity.js';
import Activity from '../Activity.js';
import AddedActivity from './postedActivity.js';
import { useState, useEffect } from 'react';
import localFont from 'next/font/local';
import ActivityForm from '../ActivityForm/ActivityForm.js';

// const myFont = localFont({src:'../../styles/Inter/Inter-VariableFont_slnt,wght.ttf'});
const myFont = localFont({src:'../../src/styles/Inter/Inter-VariableFont_slnt,wght.ttf'});

export default function ActivityList(props) {
  const [activities, setActivities] = useState([]);
  const [userActs, setUserActs] = useState([]);
  const [latitude, setLatitude] = useState(props.latitude);
  const [longitude, setLongitude] = useState(props.longitude);
  const [isOpen, setOpen] = useState(false);
  const [yelpOpen, setYelp] = useState(true);

  var queryURL = 'https://cors-anywhere.herokuapp.com/';
  const yelpAPI = process.env.NEXT_PUBLIC_YELP_KEY;

  const openToClose = () => {
    setOpen(!isOpen);
  }

  const dataSwap = () => {
    setYelp(!yelpOpen);
  }

  const getNearbyActivities = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ` + yelpAPI
      }
    };
      // console.log(props.latitude + ' ' + props.longitude);
     fetch(`${queryURL}https://api.yelp.com/v3/businesses/search?latitude=${props.latitude}&longitude=${props.longitude}&radius=1000&categories=&locale=en_US&open_now=true&sort_by=distance&device_platform=mobile-generic&limit=5`, options)
       .then(response => response.json())
       .then(response => {setActivities(response.businesses)})
       .catch(err => console.error(err));
  };

  const getAddedNearbyActivities = async () => {
    fetch('/api/getNearbyActivities', {
      method: "GET",
    })
      .then(data => data.json())
      .then((res) => {
        // Probably set the retrieved activities in a state
        // console.log('success', res);
        setUserActs(res.rows);
      })
      .catch((err) => {
        // console.log('Failed to get user added nearby activities', err);
      })
  }

  // const getUserCreated = async () => {
  //   getAddedNearbyActivities()
  //     .then((res) => {

  //     })
  // }

  useEffect(() => {
    setLatitude(props.latitude);
    setLongitude(props.longitude);
    getAddedNearbyActivities(0, 0)
      .then(() => {
        // console.log('Current Activities', activities)
        getNearbyActivities();
      })
      .then((res) => {
        // console.log(res);
      })
      .catch(err => console.log('wut'));
  }, [props.latitude, props.longitude])


  return (
    <div>
      {isOpen ?
        (
          <div className="activity-list">
            <div id="list-top">
              <button id="close-acts-btn" onClick={openToClose}>Close</button>
              <ActivityForm/>
            </div>

              {yelpOpen ?
                <div>
                  <div id="list-header">
                    <button id="yelp-open">Yelp</button>
                    <button id="user-added-btn" onClick={dataSwap}>User Added</button>
                  </div>
                  <div>
                    {activities.map((activity, index) => {
                      return (
                        <Activity action={activity} key={index}/>
                        );
                      })}
                  </div>
                </div>
                :
                <div>
                  <div id="list-header">
                    <button id="yelp-btn" onClick={dataSwap}>Yelp</button>
                    <button id="user-open">User Added</button>
                  </div>
                  <div>
                    {userActs.map((activity, index) => {
                      return (
                        <AddedActivity action={activity} key={index}/>
                        );
                      })}
                  </div>
                </div>
              }
          </div>)
      : <button id="view-acts-btn" className={`${myFont.className}`} onClick={openToClose}>View Activities</button>}
    </div>
  )
}
