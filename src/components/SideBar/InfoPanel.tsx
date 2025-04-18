import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  CircularProgress,
  Divider,
  Chip,
} from "@mui/material";
import { useSidebar } from "./useSidebarHook";
import * as styles from "./style";

const InfoPanel = ({ locations }: { locations: any[] }) => {
  const { weatherData } = useSidebar(locations);

  return (
    <Box sx={styles.container}>
      {locations.map((location) => (
        <Box key={location.id} sx={styles.locationBox}>
          <img
            src={location.image}
            alt="image"
            style={styles.imageStyle as any}
          />

          <Divider sx={{ color: "grey" }} />

          <Box sx={styles.titleBox}>
            <Typography variant="h6">
              {location.name}
              <Typography variant="body2" color="text.secondary">
                {location.state}
              </Typography>
            </Typography>

            {weatherData[location.id] ? (
              <Box sx={styles.weatherBox}>
                <img
                  src={weatherData[location.id].icon}
                  alt="weather icon"
                  width={40}
                />
                <Box ml={1}>
                  <Typography variant="body2" sx={styles.weatherText}>
                    {weatherData[location.id].description} ·{" "}
                    {weatherData[location.id].temp}°C
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {weatherData[location.id].time}
                  </Typography>
                </Box>
              </Box>
            ) : (
              <Box sx={styles.loaderBox}>
                <CircularProgress size={20} />
              </Box>
            )}
          </Box>

          <Divider sx={{ color: "grey" }} />

          <Typography variant="h5" fontWeight={600}>
            Quick facts
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {location.description}
          </Typography>

          <Divider sx={{ color: "grey" }} />

          <Typography variant="body2" color="text.secondary">
            Nearby: {location.popularPlace}
          </Typography>

          <Divider sx={{ color: "grey" }} />

          <Typography variant="h6" sx={{ mt: 2 }}>
            Recommended Hotels
          </Typography>

          <Box sx={styles.hotelContainer}>
            {location.hotels?.map((hotel: any) => (
              <Card key={`${location.id}-${hotel.name}`} sx={styles.hotelCard}>
                <Box position="relative">
                  <CardMedia
                    component="img"
                    height="140"
                    image={hotel.image}
                    alt={hotel.name}
                  />
                  <Chip
                    label={`₹${hotel.price.toLocaleString()}`}
                    size="small"
                    sx={styles.priceChip}
                  />
                </Box>

                <CardContent sx={styles.hotelContent}>
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    fontWeight={500}
                    noWrap
                    title={hotel.name}
                  >
                    {hotel.name}
                  </Typography>

                  <Box sx={styles.ratingBox}>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      fontWeight={500}
                    >
                      {hotel.rating.toFixed(1)}
                    </Typography>
                    <Typography color="gold">★</Typography>
                    <Typography variant="body2" color="text.secondary">
                      ({hotel.reviews})
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default InfoPanel;
