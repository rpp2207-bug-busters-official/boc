import Map, { GeolocateControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

function MyMap() {
  return (
    <div>
      <Map
        mapboxAccessToken="pk.eyJ1IjoicmxodXRvbmciLCJhIjoiY2xmOTJib2JpMmJ2eDNxbGhtdDRvanp4bCJ9.34AL9vkcKwIOO4xkure1kg"
        initialViewState={{
          longitude: -100,
          latitude: 40,
          zoom: 3.5,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
      >
        {/* <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        /> */}
      </Map>
    </div>
  );
}
export default MyMap;