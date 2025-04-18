import { useState } from "react";

const useHome = () => {
  const [state, setState] = useState({
    filteredResults: [] as any[],
    showPanel: false,
    focusLocation: null as any,
  });

  const handleSelect = (location: any) => {
    setState({
      filteredResults: [location],
      focusLocation: location,
      showPanel: true,
    });
  };

  const handleSearchResults = (results: any[]) => {
    setState((prev) => ({
      ...prev,
      filteredResults: results,
      focusLocation: results.length === 1 ? results[0] : null,
    }));
  };

  return { state, setState, handleSelect, handleSearchResults };
};

export { useHome };
