import Script from 'next/script'
import {Helmet} from 'react-helmet'

import React, { useRef, useEffect, useState } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoicmxodXRvbmciLCJhIjoiY2xmOTJib2JpMmJ2eDNxbGhtdDRvanp4bCJ9.34AL9vkcKwIOO4xkure1kg';

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
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom
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
    // map.current.on('mousemove', (e) => {
      map.current.on('click', (e) => {
      document.getElementById('info').innerHTML =
      // `e.point` is the x, y coordinates of the `mousemove` event
      // relative to the top-left corner of the map.
      JSON.stringify(e.point) +
      '<br />' +
      // `e.lngLat` is the longitude, latitude geographical position of the event.
      // JSON.stringify(e.lng);
      JSON.stringify(e.lngLat.wrap());
      map.current.flyTo({
        center: e.lngLat
        });
      });
  });

  return (
    <>

    <div className="jumbotron text-center">
    <Script src="https://api.mapbox.com/mapbox-gl-js/v2.13.0/mapbox-gl.js"></Script>
  <h1>Charge and Tarry</h1>
  <p>Search box  |  Filter</p>
</div>

<div className="container">
  <div className="row">

{/* <div className="sidebar">
Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
</div> */}
<div>
<div ref={mapContainer} className="map-container" />
</div>
<pre id="info"></pre>
  </div>
</div>
</>
  )
}