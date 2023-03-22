import Script from 'next/script'
import {Helmet} from 'react-helmet'

// import activity list
import ActivityList from 'src/pages/ActivityList/ActivityList.js';

import React, { useRef, useEffect, useState } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

import mapboxgl from '!mapbox-gl' // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_KEY;
export default function ChargerMap(props) {

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-122.4755859375);
  const [lat, setLat] = useState(48.74894534343292);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      // style: 'mapbox://styles/mapbox/streets-v12',
      style:'mapbox://styles/rlhutong/clfdie9qk000b01qlk82ydzeb',
      center: [lng, lat],
      zoom: zoom
    });
    map.current.addControl(
      new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl
      })
    );


    map.current.on('load', () => {
      map.current.loadImage(
        '/images/station-green.png',
        (error, image) => {
        if (error) throw error;
        map.current.addImage('station', image);
        map.current.addSource('usstations', {
          type: 'geojson',
          data: 'https://raw.githubusercontent.com/rlhutong/data/master/tx.geojson'
        });

        map.current.addLayer({
          'id': 'usstations-layer',
          // 'type': 'circle',
          'type':'symbol',
          'source': 'usstations',
          // 'paint': {
          // 'circle-radius': 4,
          // 'circle-stroke-width': 2,
          // 'circle-color': 'red',
          // 'circle-stroke-color': 'white'
          'layout': {
            'icon-image': 'station', // reference the image
            'icon-size': 0.1
            }
        });



        const popup = new mapboxgl.Popup({
          closeButton: false,
          closeOnClick: false
          });



        map.current.on('mouseenter', 'usstations-layer', (e) => {
          // Change the cursor style as a UI indicator.
          map.current.getCanvas().style.cursor = 'pointer';

          let sname = e.features[0].properties.name;
          let provider = "Other";
          // if((e.features[0].properties.poi.operatorInfo)&&(e.features[0].properties.poi.operatorInfo.title)){
          if((e.features[0].properties.poi)){
          provider = JSON.parse(e.features[0].properties.poi).operatorInfo.title;
          }
          let connection = e.features[0].properties.connectionType;
          let coordinates = e.features[0].geometry.coordinates.slice();
          let description = e.features[0].properties.description;
          let combined = e.features[0].id + '<br />' + sname +'<br />' + coordinates + '<br />' + connection + '<br />' + description  +'<br />' + provider;

          setLat(e.lngLat.lat);
          setLng(e.lngLat.lng);
          // Ensure that if the map is zoomed out such that multiple
          // copies of the feature are visible, the popup appears
          // over the copy being pointed to.
          while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
          }


          popup.setLngLat(coordinates).setHTML(combined).addTo(map.current);
          });

          map.current.on('mouseleave', 'places', () => {
            map.current.getCanvas().style.cursor = '';
            popup.remove();
          });
      });
    });



    map.current.addControl(
      new mapboxgl.GeolocateControl({
      positionOptions: {
      enableHighAccuracy: true
      },
      // When active the map will receive updates to the device's location as it changes.
      trackUserLocation: true,
      // Draw an arrow next to the location dot to indicate which direction the device is heading.
      showUserHeading: true
      })
    );
    map.current.addControl(new mapboxgl.NavigationControl());

    // map.current.on('move', () => {
    //   setLng(map.current.getCenter().lng.toFixed(4));
    //   setLat(map.current.getCenter().lat.toFixed(4));
    //   setZoom(map.current.getZoom().toFixed(2));
    //   });

         // document.getElementById('info').innerHTML =
      // // `e.point` is the x, y coordinates of the `mousemove` event
      // // relative to the top-left corner of the map.
      // JSON.stringify(e.point) +
      // '<br />' +
      // // `e.lngLat` is the longitude, latitude geographical position of the event.
      // // JSON.stringify(e.lng);
      // JSON.stringify(e.lngLat.wrap());

      map.current.on('click', (e) => {

      map.current.flyTo({
        center: e.lngLat,
        zoom: 16
      });

      setLat(e.lngLat.lat);
      setLng(e.lngLat.lng);
      setZoom(map.current.getZoom());
      // document.getElementById('quake-info').innerHTML =
        // // JSON.stringify(
      //   // JSON.stringify(e.point) +
        //   // lat +'<div><strong>Name:</strong>Station A<div><br />'
        //   // + '<div><strong></strong><div><br />'
        //   // + '<div>Related Activitie 1:<div><br />'
      //   // JSON.stringify(e.lngLat.wrap())
        // // )
        // // ;


    });

  });

  return (
    <>

  <div className="jumbotron text-center">
    <Script src="https://api.mapbox.com/mapbox-gl-js/v2.13.0/mapbox-gl.js"></Script>
    <Script src="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v5.0.0/mapbox-gl-geocoder.min.js"></Script>
    <link rel="stylesheet" href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v5.0.0/mapbox-gl-geocoder.css" type="text/css"></link>

    <h1>Charge and Tarry</h1>
    <p>Search box  |  Filter</p>
  </div>

<div className="container">

{/* <div className="row"> */}

<div className="sidebar">
Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
</div>
  {/* <div> */}

    <div ref={mapContainer} className="map-container" />
    </div>
    <pre id="quake-info">
      <ActivityList longitude={lng} latitude={lat}/>
    </pre>
    {/* <div class='quake-info'>
  <div><strong>Name:</strong> <span id='name'></span></div>
  <div><strong>Related Activities:</strong></div>
  </div> */}
    {/* <pre id="features"></pre> */}

  {/* <div><strong>Location:</strong> <span id=''></span></div>
  <div><strong>Date:</strong> <span id='date'></span></div> */}

    <pre id="info"></pre>

  {/* </div> */}
{/* </div> */}
</>
  )
}