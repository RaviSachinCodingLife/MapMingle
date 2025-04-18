import { SxProps } from "@mui/material";
import map from "../../assets/image/Map.png";

const nevigationBg: SxProps = {
  position: "relative",
  height: "200vh",
  width: "100%",
  overflow: "hidden",
};

const infoItemStyle: SxProps = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 10,
  mt: 8,
  mb: 5,
};

const infoItemBox: SxProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 2,
  maxWidth: "900px",
  textAlign: "center",
};

const iconBtn = (inView: boolean): SxProps => ({
  transition: "transform 0.3s ease, opacity 0.3s ease",
  transform: inView ? "translateY(0)" : "translateY(40px)",
  opacity: inView ? 1 : 0,
});

const bgImg: SxProps = {
  position: "relative",
  height: "200vh",
  width: "100%",
  overflow: "hidden",
};

const bgImgBox: SxProps = {
  position: "absolute",
  top: 0,
  left: 0,
  height: "100%",
  width: "100%",
  backgroundImage: `url(${map})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  zIndex: 1,
};

const imgBoxStyle: SxProps = {
  position: "absolute",
  top: 0,
  left: 0,
  height: "100%",
  width: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  zIndex: 2,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "#000",
  textAlign: "center",
  px: 3,
  gap: 5,
};

export {
  bgImgBox,
  imgBoxStyle,
  nevigationBg,
  bgImg,
  iconBtn,
  infoItemBox,
  infoItemStyle,
};
