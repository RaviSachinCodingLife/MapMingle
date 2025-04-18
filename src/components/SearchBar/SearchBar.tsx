import { Paper, InputBase, IconButton, Divider, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import { Props } from "./type";
import * as style from "./style";
import { useSearchbar } from "./useSearchbarHook";

const SearchBar = ({ onSearchResults, onShowPanel }: Props) => {
  const { state, handleSearchChange, handleDirectionsClick } = useSearchbar(
    onSearchResults,
    onShowPanel
  );

  return (
    <Box sx={style.mainBox}>
      <Paper component="form" sx={style.formBox}>
        <IconButton sx={style.inputBtnStyle}>
          <MenuIcon />
        </IconButton>

        <InputBase
          sx={style.inputBaseStyle}
          placeholder="Search places"
          value={state.query}
          onChange={handleSearchChange}
        />

        <IconButton sx={style.inputBtnStyle}>
          <SearchIcon />
        </IconButton>

        <Divider sx={style.dividerStyle} orientation="vertical" />

        <IconButton
          color="primary"
          sx={style.inputBtnStyle}
          onClick={handleDirectionsClick}
        >
          <DirectionsIcon />
        </IconButton>
      </Paper>
    </Box>
  );
};

export default SearchBar;
