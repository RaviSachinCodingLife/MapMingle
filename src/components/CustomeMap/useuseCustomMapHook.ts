import L from "leaflet";
import { useEffect } from "react";
import { useMap } from "react-leaflet";

const useCustomMap = () => {
  const defaultIcon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  function ChangeView({ lat, lng }: { lat: number; lng: number }) {
    const map = useMap();
    useEffect(() => {
      map.setView([lat, lng], 12);
    }, [lat, lng, map]);
    return null;
  }
  return {
    defaultIcon,
    ChangeView,
  };
};

export { useCustomMap };
