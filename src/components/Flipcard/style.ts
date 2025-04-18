import { SxProps, Theme } from "@mui/material";

const mainBox = (width: number, height: number): SxProps<Theme> => ({
  perspective: "1000px",
  width,
  height,
  cursor: "pointer",
  borderRadius: 5,
});

const flipCardBox = (flipped: boolean): SxProps<Theme> => ({
  position: "relative",
  width: "100%",
  height: "100%",
  transformStyle: "preserve-3d",
  transition: "transform 0.8s",
  transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
  borderRadius: 5,
});

const frontCardBox: SxProps = {
  position: "absolute",
  width: "100%",
  height: "100%",
  backfaceVisibility: "hidden",
  backgroundColor: "#ffffff",
  borderRadius: 5,
  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  px: 4,
  py: 3,
  overflow: "hidden",
};

const imgBox: SxProps = {
  mt: 9,
  height: "100%",
  width: "80%",
  objectFit: "contain",
};

const headingTypo: SxProps = {
  fontWeight: 600,
  color: "#4a4a4a",
};

const subtitleTypo: SxProps = {
  fontWeight: 800,
  color: "#000",
};

const anotherSideBox: SxProps = {
  position: "absolute",
  width: "100%",
  height: "100%",
  backfaceVisibility: "hidden",
  backgroundColor: "#ffffff",
  borderRadius: 5,
  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  px: 4,
  py: 3,
  overflow: "hidden",
};

const imageBoxBack: SxProps = {
  mb: 10,
  height: "100%",
  width: "100%",
  objectFit: "contain",
};

const backBox: SxProps = {
  position: "absolute",
  width: "100%",
  height: "100%",
  backfaceVisibility: "hidden",
  backgroundColor: "#f7f7f7",
  transform: "rotateY(180deg)",
  borderRadius: 5,
  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  p: 4,
};

export {
  mainBox,
  backBox,
  imageBoxBack,
  anotherSideBox,
  subtitleTypo,
  flipCardBox,
  headingTypo,
  frontCardBox,
  imgBox,
};
