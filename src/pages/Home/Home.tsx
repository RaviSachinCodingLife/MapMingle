import { useState } from "react";
import { Box } from "@mui/material";
import CustomMap from "./CustomMap";
import InfoPanel from "./InfoPanel";
import SearchBar from "./SearchBar";
import locations from "../../json/locations.json";

function Home() {
  const [filteredResults, setFilteredResults] = useState<any[]>([]);
  const [showPanel, setShowPanel] = useState(false);
  const [focusLocation, setFocusLocation] = useState<any>(null);

  const handleSelect = (location: any) => {
    setFocusLocation(location);
    setFilteredResults([location]);
    setShowPanel(true);
  };

  return (
    <Box sx={{ display: "flex" }}>
      {showPanel && filteredResults.length > 0 && (
        <InfoPanel locations={filteredResults} />
      )}

      <Box sx={{ flex: 1, position: "relative" }}>
        <SearchBar
          onSearchResults={(results) => {
            setFilteredResults(results);
            if (results.length === 1) setFocusLocation(results[0]);
          }}
          onShowPanel={setShowPanel}
        />
        <CustomMap onSelect={handleSelect} focusLocation={focusLocation} />
      </Box>
    </Box>
  );
}

export default Home;
