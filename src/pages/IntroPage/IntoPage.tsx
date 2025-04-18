import { Box, IconButton, Typography } from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import video from "../../assets/video/Header Video.mp4";
import "../../assets/scss/IntroPage.scss";
import FlipCard from "../../components/Flipcard/Flipcard";
import Fotter from "../../components/Fotter/Fotter";
import CustomAccordion from "../../components/Accordions/Accordions";
import InfoList from "../../components/InfoList/Infolist";
import { useIntropage } from "./useIntroPageHook";
import * as style from "./style";

const IntroPage = () => {
  const { faqItems, faqInfoItems, infoItems, state, ref, inView, flipCards } =
    useIntropage();

  return (
    <Box>
      <Navbar />

      {/* Hero Section */}
      <Box className="video-section">
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          className="background-video"
        />
        <Box
          className={`map-title ${
            state.isScrolledDown ? "zoom-in" : "zoom-out"
          }`}
        >
          Map Mingle
        </Box>
      </Box>

      {/* Info Icons Section */}
      <Box ref={ref} sx={style.infoItemStyle}>
        {infoItems.map((item, index) => (
          <Box key={index} sx={style.infoItemBox}>
            <IconButton sx={style.iconBtn(inView)}>
              <img src={item.icon} alt={`icon-${index}`} />
            </IconButton>
            <Typography variant="h1" fontWeight={600}>
              {item.text}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* FlipCards Section */}
      <Box sx={style.bgImg}>
        <Box sx={style.bgImgBox} />
        <Box sx={style.imgBoxStyle}>
          <Typography variant="h1" fontWeight={700}>
            Navigation
          </Typography>

          {flipCards.map((card, i) => (
            <FlipCard
              key={i}
              frontImage={card.frontImage}
              title={card.title}
              subtitle={card.subtitle}
              description={card.description}
              anotherSide={card.anotherSide}
              width={900}
              height={450}
            />
          ))}
        </Box>
      </Box>

      {/* FAQ Section */}
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={5}
        bgcolor={"#212121"}
      >
        <Typography
          variant="h1"
          fontWeight={"700"}
          textAlign={"center"}
          alignSelf={"center"}
          width={"900px"}
          color="#fff"
          pt={30}
        >
          In case you missed anything.
        </Typography>

        <Box display={"flex"} flexDirection={"column"} gap={2} p={30} pt={4}>
          <CustomAccordion items={faqItems} />
        </Box>

        <Box p={30} pt={0} pb={0}>
          <InfoList title="" items={faqInfoItems} />
          <Typography variant="body1" color="grey">
            Some features may not be available for all countries or regions.
            View the complete list.
            <span style={{ textDecoration: "underline", paddingLeft: "5px" }}>
              About Apple Maps Image Collection
            </span>
          </Typography>
        </Box>

        <Fotter />
      </Box>
    </Box>
  );
};

export default IntroPage;
