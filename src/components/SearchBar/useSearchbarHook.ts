import { useState } from "react";
import places from "../../json/locations.json";

const useSearchbar = (
  onSearchResults: (results: any[]) => void,
  onShowPanel: (show: boolean) => void
) => {
  const [state, setState] = useState({
    query: "",
    filteredResults: [] as typeof places,
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const matched = places.filter(
      (place) =>
        place.name.toLowerCase().includes(value.toLowerCase()) ||
        place.state.toLowerCase().includes(value.toLowerCase())
    );

    setState({
      query: value,
      filteredResults: matched,
    });

    onSearchResults(matched);
    onShowPanel(false);
  };

  const handleDirectionsClick = () => {
    if (state.filteredResults.length > 0) {
      onShowPanel(true);
    }
  };
  return { state, handleSearchChange, handleDirectionsClick };
};

export { useSearchbar };
