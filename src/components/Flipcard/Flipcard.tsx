import { Box, Typography } from "@mui/material";
import { useState } from "react";

type FlipCardProps = {
  frontImage: string;
  title: string;
  subtitle?: string;
  description: string;
  width?: number;
  height?: number;
  anotherSide?: boolean;
};

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
    <Box
      onClick={() => setFlipped(!flipped)}
      sx={{
        perspective: "1000px",
        width,
        height,
        cursor: "pointer",
        borderRadius: 5,
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          transition: "transform 0.8s",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          borderRadius: 5,
        }}
      >
        {/* Front */}
        <Box
          sx={{
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
          }}
        >
          <Box
            component="img"
            src={frontImage}
            alt="Feature Image"
            sx={{
              mt: 9,
              height: "100%",
              width: "80%",
              objectFit: "contain",
            }}
          />

          <Box display={"flex"} flexDirection={"column"}>
            <Typography
              variant="h3"
              textAlign={"start"}
              sx={{
                fontWeight: 600,
                color: "#4a4a4a",
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                color: "#000",
              }}
            >
              {subtitle}
            </Typography>
          </Box>
        </Box>

        {anotherSide && (
          <Box
            sx={{
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
            }}
          >
            <Box display={"flex"} flexDirection={"column"} ml={8}>
              <Typography
                variant="h3"
                textAlign={"start"}
                sx={{
                  fontWeight: 600,
                  color: "#4a4a4a",
                }}
              >
                {title}

                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 800,
                    color: "#000",
                  }}
                >
                  {subtitle}
                </Typography>
              </Typography>
            </Box>
            <Box
              component="img"
              src={frontImage}
              alt="Feature Image"
              sx={{
                mb: 10,
                height: "100%",
                width: "100%",
                objectFit: "contain",
              }}
            />
          </Box>
        )}
        {/* Back */}
        <Box
          sx={{
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
          }}
        >
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
