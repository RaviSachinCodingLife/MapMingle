import { SxProps } from "@mui/material";

const appBarStyle: SxProps = {
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  height: "60px",
};

const toolBarStyle: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const btnStyle: SxProps = { borderRadius: "50px", mt: 1.5 };

export { appBarStyle, toolBarStyle, btnStyle };
