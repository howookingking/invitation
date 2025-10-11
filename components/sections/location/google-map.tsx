"use client";

import { LOCATION_ANSWER_GPS } from "@/constants/easter-egg";
import { WEDDING_INFO } from "@/constants/wedding";
import { useEasterEggStore } from "@/store/use-easter-egg-store";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { useState } from "react";
import LocationEasterEggDialog from "./location-easter-egg-dialog";
import GoogleMapMarker from "./wedding-marker";

export default function CustomGoogleMap() {
  const { setStep, step } = useEasterEggStore();

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  // const [zoom, setZoom] = useState(17);

  // const mapRef = useRef<google.maps.Map | null>(null);

  return (
    <>
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
      >
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "400px" }}
          center={WEDDING_INFO.venueGPS}
          zoom={17}
          // zoom={zoom}
          // onLoad={(map) => {
          //   mapRef.current = map;
          // }}
          // onZoomChanged={() => {
          //   if (mapRef.current) {
          //     setZoom(mapRef.current.getZoom()!);
          //   }
          // }}
          options={{
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
            zoomControl: true,
            cameraControl: false,
          }}
        >
          <GoogleMapMarker
            title={WEDDING_INFO.venue}
            position={WEDDING_INFO.venueGPS}
          />

          {step >= 2 && (
            <GoogleMapMarker
              position={LOCATION_ANSWER_GPS}
              title="영등포 타임 스퀘어"
              onClick={() => {
                setIsDialogOpen(true);
                setStep(3);
              }}
            />
          )}
          {/* {zoom >= 13 && step >= 2 && (
            <GoogleMapMarker
              position={HAMMERING_MAN_GPS}
              title="Hammering Man"
              onClick={() => {
                setIsDialogOpen(true);
                setStep(3);
              }}
            />
          )} */}
        </GoogleMap>
      </LoadScript>

      <LocationEasterEggDialog
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
      />
    </>
  );
}
