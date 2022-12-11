import React from "react";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
const MAP_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const libraries = ["places"];
console.log(MAP_API_KEY)

function MapImage({ latitude, longitude }) {
  const coordinates = { lat: Number(latitude), lng: Number(longitude) };
  const containerStyle = {
    width: "100%",
    height: "100%",
  };
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: MAP_API_KEY,
    libraries,
  });
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={coordinates}
      zoom={16}
    >
      <MarkerF
        position={coordinates}
        //   icon={{
        //     url: "https://gcdnb.pbrd.co/images/UPbgm8xNJfhS.png",
        //   }}
      />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MapImage);