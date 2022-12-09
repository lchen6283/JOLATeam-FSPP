import React from "react";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
const MAP_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

function MapImage({ latitude, longitude }) {
  const coordinates = { lat: Number(latitude), lng: Number(longitude) };
  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  return (
    <div>
      <LoadScript googleMapsApiKey={MAP_API_KEY}>
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
      </LoadScript>
    </div>
  );
}

export default React.memo(MapImage);
