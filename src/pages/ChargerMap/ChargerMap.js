import Script from 'next/script'

import {Helmet} from 'react-helmet'
import React, { useRef, useEffect, useState } from 'react'

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoicmxodXRvbmciLCJhIjoiY2xmOTF3dmhrMjI4NDNvbGVubmpqOXl4cSJ9.Al6047KSVrFW56q8LB1tyQ';

export default function ChargerMap(props) {

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom
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
    {/* <div className="col-sm-4">
      <h3>Column 1</h3>
      <p>Lorem ipsum dolor..</p>
    </div> */}
    {/* <div className="col-sm-4"> */}
      {/* <h3>Column 2</h3>
      <p>Lorem ipsum dolor..</p> */}
      {/* <div id="map"></div>
      <Helmet>
<script>
	mapboxgl.accessToken = 'pk.eyJ1IjoicmxodXRvbmciLCJhIjoiY2xmOTF3dmhrMjI4NDNvbGVubmpqOXl4cSJ9.Al6047KSVrFW56q8LB1tyQ';
const map = new mapboxgl.Map(
  { container: 'map', // container ID
// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
style: 'mapbox://styles/mapbox/streets-v12', // style URL
center: [-74.5, 40], // starting position [lng, lat]
zoom: 9 // starting zoom
});
</script>
</Helmet> */}
<div>
<div ref={mapContainer} className="map-container" />
</div>
    {/* </div> */}
    {/* <div className="col-sm-4">
      <h3>Column 3</h3>
      <p>Lorem ipsum dolor..</p>
    </div> */}
  </div>
</div>
</>
  )
}