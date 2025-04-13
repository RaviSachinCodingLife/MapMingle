import AppBar from "@mui/material/AppBar";
import { Button, IconButton, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "rgba(0, 0, 0, 0.7)", height: "60px" }}
    >
      <Toolbar
        variant="dense"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <IconButton edge="start" color="inherit" aria-label="menu">
          <Typography variant="h6" mt={0.5}>
            Map Mingle
          </Typography>
        </IconButton>
        <Button
          variant="contained"
          onClick={() => navigate("/home")}
          sx={{ borderRadius: "50px", mt: 1.5 }}
        >
          Try now
        </Button>
      </Toolbar>
    </AppBar>
  );
}
