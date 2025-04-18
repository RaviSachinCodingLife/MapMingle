import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { FlipCardProps } from "./type";
import * as style from "./style";

const FlipCard = ({
  frontImage,
  title,
  subtitle,
  description,
  width = 1000,
  height = 500,
  anotherSide = false,
}: FlipCardProps) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <Box onClick={() => setFlipped(!flipped)} sx={style.mainBox(width, height)}>
      <Box sx={style.flipCardBox(flipped)}>
        {/* Front */}
        <Box sx={style.frontCardBox}>
          <Box
            component="img"
            src={frontImage}
            alt="Feature Image"
            sx={style.imgBox}
          />

          <Box display={"flex"} flexDirection={"column"}>
            <Typography variant="h3" textAlign={"start"} sx={style.headingTypo}>
              {title}
            </Typography>
            <Typography variant="h3" sx={style.subtitleTypo}>
              {subtitle}
            </Typography>
          </Box>
        </Box>

        {anotherSide && (
          <Box sx={style.anotherSideBox}>
            <Box display={"flex"} flexDirection={"column"} ml={8}>
              <Typography
                variant="h3"
                textAlign={"start"}
                sx={style.headingTypo}
              >
                {title}

                <Typography variant="h3" sx={style.subtitleTypo}>
                  {subtitle}
                </Typography>
              </Typography>
            </Box>
            <Box
              component="img"
              src={frontImage}
              alt="Feature Image"
              sx={style.imageBoxBack}
            />
          </Box>
        )}
        {/* Back */}
        <Box sx={style.backBox}>
          <Typography
            variant="body1"
            textAlign="start"
            display={"flex"}
            flexDirection={"column"}
            gap={1}
            p={5}
            color="#333"
          >
            <Typography variant="h5" fontWeight={600} color="#000">
              {title}
            </Typography>
            {description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default FlipCard;
