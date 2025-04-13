import { useState } from "react";
import { Paper, InputBase, IconButton, Divider, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import places from "../../json/locations.json";

type Props = {
  onSearchResults: (results: any[]) => void;
  onShowPanel: (show: boolean) => void;
};

const SearchBar = ({ onSearchResults, onShowPanel }: Props) => {
  const [query, setQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState<any[]>([]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    const matched = places.filter(
      (place) =>
        place.name.toLowerCase().includes(value.toLowerCase()) ||
        place.state.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredResults(matched);
    onSearchResults(matched);
    onShowPanel(false); // hide left panel until user clicks directions
  };

  const handleDirectionsClick = () => {
    if (filteredResults.length > 0) {
      onShowPanel(true);
    }
  };

  return (
    <Box sx={{ position: "absolute", top: 10, left: 360, zIndex: 1000 }}>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 400,
        }}
      >
        <IconButton sx={{ p: "10px" }}>
          <MenuIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search places"
          value={query}
          onChange={handleSearchChange}
        />
        <IconButton sx={{ p: "10px" }}>
          <SearchIcon />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton
          color="primary"
          sx={{ p: "10px" }}
          onClick={handleDirectionsClick}
        >
          <DirectionsIcon />
        </IconButton>
      </Paper>
    </Box>
  );
};

export default SearchBar;
