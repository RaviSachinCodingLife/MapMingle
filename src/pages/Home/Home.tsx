import { Box } from "@mui/material";
import CustomMap from "../../components/CustomeMap/CustomMap";
import InfoPanel from "../../components/SideBar/InfoPanel";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useHome } from "./useHome";

function Home() {
  const { state, setState, handleSelect, handleSearchResults } = useHome();
  return (
    <Box display={"flex"}>
      {state.showPanel && state.filteredResults.length > 0 && (
        <InfoPanel locations={state.filteredResults} />
      )}

      <Box flex={1} position={"relative"}>
        <SearchBar
          onSearchResults={handleSearchResults}
          onShowPanel={(value: boolean) =>
            setState((prev) => ({ ...prev, showPanel: value }))
          }
        />
        <CustomMap
          onSelect={handleSelect}
          focusLocation={state.focusLocation}
        />
      </Box>
    </Box>
  );
}

export default Home;
