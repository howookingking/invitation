import { Marker, OverlayView } from "@react-google-maps/api";

type Props = {
  position: google.maps.LatLngLiteral;
  title: string;
  onClick?: () => void;
};

export default function GoogleMapMarker({ position, onClick, title }: Props) {
  return (
    <div onClick={onClick}>
      <Marker position={position} title={title} onClick={onClick} />

      <OverlayView
        position={position}
        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        getPixelPositionOffset={(width, height) => ({
          x: width / 2,
          y: -height,
        })}
      >
        <div
          style={{
            width: "fit-content",
            color: "#ff2157",
            fontSize: "14px",
            fontWeight: "bold",
            background: "white",
            border: "2px solid #ff2157",
            padding: "4px 8px",
            borderRadius: "4px",
            whiteSpace: "nowrap",
          }}
        >
          {title}
        </div>
      </OverlayView>
    </div>
  );
}
