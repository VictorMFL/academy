"use client"

import { APIProvider, Map } from "@vis.gl/react-google-maps";

const GoogleMap = () => {
  return (
    <APIProvider apiKey="AIzaSyAJ20_RS452dK1c1MQbFORBIjcEnpprUZQ">
    <Map
      style={{width: "60%", height: '35vh'}}
      defaultCenter={{lat: -23.4883, lng: -46.8405}}
      defaultZoom={13}
      gestureHandling={'greedy'}
      disableDefaultUI={true}
    />
  </APIProvider>
  );
};

export default GoogleMap;
