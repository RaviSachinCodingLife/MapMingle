import AppBar from "@mui/material/AppBar";
import { Button, IconButton, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import * as style from "./style";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <AppBar position="sticky" sx={style.appBarStyle}>
      <Toolbar variant="dense" sx={style.toolBarStyle}>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <Typography variant="h6" mt={0.5}>
            Map Mingle
          </Typography>
        </IconButton>
        <Button
          variant="contained"
          onClick={() => navigate("/home")}
          sx={style.btnStyle}
        >
          Try now
        </Button>
      </Toolbar>
    </AppBar>
  );
}
