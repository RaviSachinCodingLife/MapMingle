import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";
import data from "../../json/locations.json";

const defaultIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

type Location = (typeof data)[0];

type Props = {
  onSelect: (loc: Location) => void;
  focusLocation: Location | null;
};

function ChangeView({ lat, lng }: { lat: number; lng: number }) {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lng], 12);
  }, [lat, lng, map]);
  return null;
}

const CustomMap = ({ onSelect, focusLocation }: Props) => {
  return (
    <MapContainer
      center={[22.9734, 78.6569]}
      zoom={5}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {focusLocation && (
        <ChangeView lat={focusLocation.lat} lng={focusLocation.lng} />
      )}
      {data.map((loc) => (
        <Marker
          key={loc.id}
          position={[loc.lat, loc.lng]}
          icon={defaultIcon}
          eventHandlers={{
            click: () => onSelect(loc),
          }}
        >
          <Popup>{loc.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default CustomMap;
