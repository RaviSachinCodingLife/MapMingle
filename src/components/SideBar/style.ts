import { SxProps } from "@mui/material";

const container: SxProps = {
  width: 400,
  height: "100vh",
  bgcolor: "#f5f5f5",
  overflowY: "auto",
  p: 2,
};

const locationBox: SxProps = {
  display: "flex",
  flexDirection: "column",
  gap: 3,
  mb: 2,
};

const imageStyle: SxProps = {
  height: "180px",
  width: "100%",
  objectFit: "cover",
};

const titleBox: SxProps = {
  display: "flex",
  justifyContent: "space-between",
};

const weatherBox: SxProps = {
  mt: 2,
  display: "flex",
  alignItems: "center",
};

const weatherText: SxProps = {
  textTransform: "capitalize",
};

const loaderBox: SxProps = {
  mt: 2,
};

const hotelContainer: SxProps = {
  display: "flex",
  flexWrap: "wrap",
  gap: 2,
};

const hotelCard: SxProps = {
  width: {
    xs: "100%",
    sm: "55%",
    md: "47%",
  },
  boxShadow: 2,
  borderRadius: 2,
  position: "relative",
  overflow: "hidden",
};

const priceChip: SxProps = {
  position: "absolute",
  bottom: 8,
  right: 8,
  bgcolor: "white",
  color: "#000",
  fontWeight: 600,
  px: 1.5,
  boxShadow: 1,
};

const hotelContent: SxProps = {
  p: 1.5,
};

const ratingBox: SxProps = {
  display: "flex",
  alignItems: "center",
  gap: 0.5,
};

export {
  container,
  locationBox,
  titleBox,
  weatherBox,
  weatherText,
  imageStyle,
  ratingBox,
  hotelContainer,
  hotelCard,
  loaderBox,
  priceChip,
  hotelContent,
};
