import { useState, useEffect } from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

function MyMap() {
  const [viewport, setViewport] = useState({});
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setViewport({
        ...viewport,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
        zoom: 3.5,
      });
    });

    // const nameDisplay = document.getElementById('name');



    // let stationID = null;

    // map.current.on('mousemove', 'usstations', (event) => {
    //   map.current.getCanvas().style.cursor = 'pointer';
    //   // Set constants equal to the current feature's magnitude, location, and time
    //   const name = event.features[0].properties.name;

    //   // Check whether features exist
    //   if (event.features.length === 0) return;
    //   // Display the magnitude, location, and time in the sidebar
    //   nameDisplay.textContent = name;

    //   // If quakeID for the hovered feature is not null,
    //   // use removeFeatureState to reset to the default behavior
    //   if (stationID) {
    //     map.current.removeFeatureState({
    //       source: 'usstations',
    //       id: stationID
    //     });
    //   }

    //   stationID = event.features[0].id;

    //   // When the mouse moves over the earthquakes-viz layer, update the
    //   // feature state for the feature under the mouse
    //   map.current.setFeatureState(
    //     {
    //       source: 'usstations',
    //       id: stationID
    //     },
    //     {
    //       hover: true
    //     }
    //   );
    // });


    // map.current.on('mousemove', (e) => {
    //   const features = map.current.queryRenderedFeatures(e.point);

    //   // Limit the number of properties we're displaying for
    //   // legibility and performance
    //   const displayProperties = [
    //   'connections'
    //   ];

    //   const displayFeatures = features.map((feat) => {
    //   const displayFeat = {};
    //   displayProperties.forEach((prop) => {
    //   displayFeat[prop] = feat[prop];
    //   });
    //   return displayFeat;
    //   });

    //   // Write object as string with an indent of two spaces.
    //   // document.getElementById('features').innerHTML = JSON.stringify(
    //   document.getElementById('features').innerHTML = JSON.stringify(
    //   displayFeatures,
    //   null,
    //   2
    //   );
    //   });
  }, []);
  return (
    <div>
      {viewport.latitude && viewport.longitude && (
        <div>
          <h1>Your Location:</h1>
          <Map
            mapboxAccessToken="pk.eyJ1IjoicmxodXRvbmciLCJhIjoiY2xmOTJib2JpMmJ2eDNxbGhtdDRvanp4bCJ9.34AL9vkcKwIOO4xkure1kg"
            initialViewState={viewport}
            mapStyle="mapbox://styles/mapbox/streets-v11"
          >
            <Marker
              longitude={viewport.longitude}
              latitude={viewport.latitude}
            />
          </Map>
        </div>
      )}
    </div>
  );
}
export default MyMap;