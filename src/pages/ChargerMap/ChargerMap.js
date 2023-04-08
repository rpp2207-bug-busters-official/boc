import Script from 'next/script';
import {Helmet} from 'react-helmet';
import FiltersForm from '../../../components/FiltersForm.js';
import getConnectionsFilters from '../../../helper_functions/getConnectionsFilters.js';
import getOperatorsFilters from '../../../helper_functions/getOperatorsFilters.js';
import JsonEscape from '../../../helper_functions/jsonEscape.js';
import ActivityList from '../../../components/ActivityList/ActivityList.js';

import localFont from 'next/font/local';
import Image from 'next/image';

import React, { useRef, useEffect, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

import {BsFillPlugFill} from 'react-icons/bs';

import mapboxgl from 'mapbox-gl' // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_KEY;
const myFont = localFont({src:'../../styles/Inter/Inter-VariableFont_slnt,wght.ttf'})
export default function ChargerMap(props) {

  const layer = 'us2-5avts3';
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-100.000000);
  const [lat, setLat] = useState(38.5);
  const [zoom, setZoom] = useState(4);
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
        console.log(map.current.getCanvas().style.cursor);
        let sname = e.features[0]?.properties?.name;
        let connection = e.features[0]?.properties?.connectionType;
        let coordinates = e.features[0]?.geometry?.coordinates?.slice();
        let description = e.features[0]?.properties?.description;
        let level = e.features[0]?.properties?.level;
        let provider = "Other";

        let poi = e.features[0]?.properties?.poi;
        let start="operatorInfo";
        if (poi?.includes(start)) {
          let cleanup = '{"' + poi?.substring(poi?.indexOf(start));
          provider = JSON.parse(JsonEscape(cleanup)).operatorInfo?.title;
        }

        let avail = "Available";
        if (level !== '2') {
          avail = "Occupied";
        }

        // let combined = '<p> ' + avail + '</p>'
        // '<br /><p>' + provider +
        // '<br />' + sname +
        // '<br />' + connection +
        // '<br />' + description +
        // '<br />';

        let combined = `<p style='font-size:20px'><strong>${avail}</strong></p>
        <p><strong>Location:</strong> ${sname}</p>
        <p><strong>Connector Type:</strong> ${connection}</p>
        <p style='font-size:"15px"; color:rgb(150, 150, 150);'>${provider}</p>
        <p style='color: rgb(150, 150, 150);'><small>${description}</small></p>
        `

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
    });



  });

  return (
    <>
    <Script src="https://api.mapbox.com/mapbox-gl-js/v2.13.0/mapbox-gl.js"></Script>
    <Script src="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v5.0.0/mapbox-gl-geocoder.min.js"></Script>
    <link rel="stylesheet" href="/map.css" type="text/css"></link>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <h1 id="title" className={myFont.className} style={{fontSize:'max(5vh,min(5vw,90px))', margin:'3vh', color: 'black', fontWeight: 'bold', height: "10vh"}}>Charge {''}
      <Image
          src="/and-symbol.png"
          alt="Charge and Tarry Logo"
          width='75'
          height='100'
          style={{height: "max(5vh,min(5vw,90px))", width: "auto"}}
      /> Tarry</h1>
  {/* </div> */}

   <span className="map-span-container">

 {/* <div className="row"> */}

 {/* <div className="sidebar">
 Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
 </div> */}
  {/* <div> */}
     <FiltersForm filters={filters} setFilters={setFilters} onCloseClick={handleClick} />
     <div ref={mapContainer} className="map-container" />
  </span>
  <pre id="quick-info">
    <ActivityList longitude={lng} latitude={lat}/>
  </pre>

</>
  )
}