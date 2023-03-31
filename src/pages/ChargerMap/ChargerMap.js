import Script from 'next/script';
import {Helmet} from 'react-helmet';
// import Filters from './filters.js';
import FiltersForm from '../../../components/FiltersForm.js';
import getConnectionsFilters from '../../../helper_functions/getConnectionsFilters.js';
import getOperatorsFilters from '../../../helper_functions/getOperatorsFilters.js';
// import activity list
import ActivityList from '../ActivityList/ActivityList.js';
import localFont from 'next/font/local';

import React, { useRef, useEffect, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

import mapboxgl from 'mapbox-gl' // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_KEY;
const myFont = localFont({src:'../../styles/Anton/Anton-Regular.ttf'})
export default function ChargerMap(props) {

  const layer = 'us2-5avts3';
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-100.000000);
  const [lat, setLat] = useState(.500000);
  const [zoom, setZoom] = useState(3);
  const [activitiesOpened, setActivitiesOpened] = useState(false);
  const [filters, setFilters] = useState({
    operators:[],
    connections:[]
  });





function handleClick() {
  // console.log("in handle click");
  let combinedFilters = getOperatorsFilters(filters).concat(getConnectionsFilters(filters));
  if (combinedFilters.length!== 0) {
    let filter = ['any',].concat(combinedFilters);
    map.current.setFilter(layer,filter);
    // console.log("log in handleclick",JSON.stringify(filter) );
        // alert(JSON.stringify(filter));
  }
}

function jsonEscape(str)  {
  return str.replace(/\n/g, "\\\\n").replace(/\r/g, "\\\\r").replace(/\t/g, "\\\\t");
}


  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      // style: 'mapbox://styles/mapbox/streets-v12',
      style:'mapbox://styles/rlhutong/clfdie9qk000b01qlk82ydzeb',
      // style:'mapbox://styles/rlhutong/clfitz1yp001201o96kahnp76',
      center: [lng, lat],
      zoom: zoom
    });
    map.current.addControl(
      new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl
      })
    );

    map.current.on('load', function(){
      const popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
        });

      function checkEmpty(info) {
        return (info) ? info : "No data";
      }

      function showPopup(e) {

        map.current.getCanvas().style.cursor = 'pointer';
        let sname = e.features[0].properties.name;
        let provider = "Other";
        if(e.features[0].properties.poi){
        let poi = e.features[0].properties.poi;
        let start="operatorInfo";
        if (poi.includes("operatorInfo")){
          let cleanup = '{"' + poi.substring(poi.indexOf(start));
          provider = JSON.parse(jsonEscape(cleanup)).operatorInfo.title;
        }
      }
      let connection = e.features[0].properties.connectionType;
      let coordinates = e.features[0].geometry.coordinates.slice();
      let description = e.features[0].properties.description;
      let level = e.features[0].properties.level;
      let avail = "Available";
      if (level !== '2') {
        avail = "Occupied";
      }

      let combined = avail + '<br />' + provider + '<br />' + sname +'<br />' + connection + '<br />' + description  +'<br />';

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      popup.setLngLat(coordinates)
        .setHTML(checkEmpty(combined))
        .addTo(map.current);
      }

      function hidePopup() {
        map.current.getCanvas().style.cursor = '';

        popup.remove();
      }

      map.current.on('mouseenter', layer, showPopup);
      map.current.on('mouseleave', layer, hidePopup);
    });


    map.current.addControl(
      new mapboxgl.GeolocateControl({
      positionOptions: {
      enableHighAccuracy: true
      },
      trackUserLocation: true,
      showUserHeading: true
      })
    );


    map.current.addControl(new mapboxgl.NavigationControl());

    map.current.on('click', (e) => {

    map.current.flyTo({
      center: e.lngLat,
      zoom: 16
    });

    setLat(e.lngLat.lat);
    setLng(e.lngLat.lng);
    setZoom(map.current.getZoom());

    // document.getElementById('quake-info').innerHTML =
    //   lat + '<div><strong>Name:</strong>Station A<div><br />'
    //   + '<div><strong>Related Activities:</strong><div><br />'
    //   + '<div>Related Activitie 1:<div><br />';
    });



  });

  return (
    <>

  {/* <div className="jumbotron text-center"> */}
    <Script src="https://api.mapbox.com/mapbox-gl-js/v2.13.0/mapbox-gl.js"></Script>
    <Script src="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v5.0.0/mapbox-gl-geocoder.min.js"></Script>
    <link rel="stylesheet" href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v5.0.0/mapbox-gl-geocoder.css" type="text/css"></link>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <h1 className={myFont.className} style={{fontSize:'60px', marginBottom:'80px'}}>Charge and Tarry</h1>
  {/* </div> */}

   <span className="container">

 {/* <div className="row"> */}

 {/* <div className="sidebar">
 Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
 </div> */}
  {/* <div> */}
     <FiltersForm filters={filters} setFilters={setFilters} onCloseClick={handleClick} />
     <div ref={mapContainer} className="map-container" />
  </span>
  <pre id="quake-info">
    <ActivityList longitude={lng} latitude={lat}/>
  </pre>
    {/* <pre id="features"></pre> */}
    {/* <pre id="info"></pre> */}
  {/* </div> */}
{/* </div> */}
</>
  )
}