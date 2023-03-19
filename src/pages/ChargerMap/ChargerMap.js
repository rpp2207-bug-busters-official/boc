import Script from 'next/script'
import {Helmet} from 'react-helmet'

import React, { useRef, useEffect, useState } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'

import mapboxgl from '!mapbox-gl' // eslint-disable-line import/no-webpack-loader-syntax

// const path = require('path');
// require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') });
// mapboxgl.accessToken = 'pk.eyJ1IjoicmxodXRvbmciLCJhIjoiY2xmOTJib2JpMmJ2eDNxbGhtdDRvanp4bCJ9.34AL9vkcKwIOO4xkure1kg';
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_KEY;
export default function ChargerMap(props) {

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-100);
  const [lat, setLat] = useState(31);
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

    map.current.on('load', () => {
      map.current.loadImage(
        '/images/station-green.png',
        (error, image) => {
        if (error) throw error;

        // Add the image to the map style.
        map.current.addImage('station', image);


        map.current.addSource('usstations', {
          type: 'geojson',
          // Use a URL for the value for the `data` property.
          data: 'https://raw.githubusercontent.com/rpp2207-bug-busters-official/boc/main/sample-data/us.geojson'
          // data: 'https://drive.google.com/file/d/1ZwjiS2V8YgXVzmAFVivWVUhZS6FqybG1/view?usp=share_link'
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
            'icon-size': 0.05
            }
        });

        const popup = new mapboxgl.Popup({
          closeButton: false,
          closeOnClick: false
          });

        map.current.on('mouseenter', 'usstations-layer', (e) => {
          // Change the cursor style as a UI indicator.
          map.current.getCanvas().style.cursor = 'pointer';

          // Copy coordinates array.
          let sname = e.features[0].properties.name;
          let provider = "Other";
          if((e.features[0].properties.poi.operatorInfo)&&(e.features[0].properties.poi.operatorInfo.title)){
            provider = e.features[0].properties.poi.operatorInfo.title;
          }
          let coordinates = e.features[0].geometry.coordinates.slice();
          let description = e.features[0].properties.description;
          let combined = coordinates +'<br />' + sname +'<br />' + description  +'<br />' + provider;

          setLat(e.lngLat.lat);
          setLng(e.lngLat.lng);
          // Ensure that if the map is zoomed out such that multiple
          // copies of the feature are visible, the popup appears
          // over the copy being pointed to.
          while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
          }

          // Populate the popup and set its coordinates
          // based on the feature found.
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
    // map.current.addControl(new mapboxGeocoder)
    // map.current.on('move', () => {
    //   setLng(map.current.getCenter().lng.toFixed(4));
    //   setLat(map.current.getCenter().lat.toFixed(4));
    //   setZoom(map.current.getZoom().toFixed(2));
    //   });
    // map.current.on('mousemove', (e) => {
      map.current.on('click', (e) => {
      // document.getElementById('info').innerHTML =
      // // `e.point` is the x, y coordinates of the `mousemove` event
      // // relative to the top-left corner of the map.
      // JSON.stringify(e.point) +
      // '<br />' +
      // // `e.lngLat` is the longitude, latitude geographical position of the event.
      // // JSON.stringify(e.lng);
      // JSON.stringify(e.lngLat.wrap());
      map.current.flyTo({
        center: e.lngLat
      });


      document.getElementById('quake-info').innerHTML =
      // JSON.stringify(
        // JSON.stringify(e.point) +
        '<div><strong>Name:</strong>Station A<div><br />'
        + '<div><strong>Related Activities:</strong><div><br />'
        + '<div>Related Activitie 1:<div><br />'
        // JSON.stringify(e.lngLat.wrap())
      // )
      ;

      // new mapboxgl.Popup()
      //   // .setLngLat(e.lngLat)
      //   .setLngLat(new mapboxgl.LngLat(map.current.getBounds().getWest(),map.current.getCenter().lat))
      //   .setHTML('name: station A and more nearby activities')
      //   .addTo(map.current);


    });

    // const nameDisplay = document.getElementById('name');
    // nameDisplay.textContent = 'Related Activities';
  });

  return (
    <>

  <div className="jumbotron text-center">
    <Script src="https://api.mapbox.com/mapbox-gl-js/v2.13.0/mapbox-gl.js"></Script>
    <Script src="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v5.0.0/mapbox-gl-geocoder.min.js"></Script>
    <h1>Charge and Tarry</h1>
    <p>Search box  |  Filter</p>
  </div>

<div className="container">

{/* <div className="row"> */}

{/* <div className="sidebar">
Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
</div> */}
  {/* <div> */}

    <div ref={mapContainer} className="map-container" />
    </div>
    <pre id="quake-info"></pre>
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