import { SxProps } from "@mui/material";

const mainBox: SxProps = {
  position: "absolute",
  top: 10,
  left: 360,
  zIndex: 1000,
};

const formBox: SxProps = {
  p: "2px 4px",
  display: "flex",
  alignItems: "center",
  width: 400,
};

const inputBtnStyle: SxProps = { p: "10px" };
const inputBaseStyle: SxProps = { ml: 1, flex: 1 };
const dividerStyle: SxProps = { height: 28, m: 0.5 };
export { mainBox, dividerStyle, inputBaseStyle, formBox, inputBtnStyle };
