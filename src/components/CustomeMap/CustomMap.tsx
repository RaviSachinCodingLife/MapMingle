import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import data from "../../json/locations.json";
import { Props } from "./type";
import { useCustomMap } from "./useuseCustomMapHook";

const CustomMap = ({ onSelect, focusLocation }: Props) => {
  const { defaultIcon, ChangeView } = useCustomMap();
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
