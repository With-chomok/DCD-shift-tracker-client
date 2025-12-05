import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useLoaderData } from "react-router";
const Coverage = () => {
  const servicesCenter = useLoaderData();
  console.log(servicesCenter);
  return (
    <div className=" w-full my-20 ">
      <MapContainer
        center={[23.685, 90.3563]}
        zoom={7}
        scrollWheelZoom={false}
        className="">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {servicesCenter.map((center, index) => (
          <Marker key={index} position={[center.latitude, center.longitude]}>
            <Popup>
                <strong>{center.city}</strong>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Coverage;
