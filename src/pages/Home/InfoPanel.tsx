import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";

const InfoPanel = ({ locations }: { locations: any[] }) => {
  if (locations.length === 0) return null;
  return (
    <Box
      sx={{
        width: 300,
        height: "100vh",
        bgcolor: "#f5f5f5",
        overflowY: "auto",
        p: 2,
      }}
    >
      {locations.map((location) => (
        <Card key={location.id} sx={{ mb: 2 }}>
          <CardMedia component="img" height="180" image={location.image} />
          <CardContent>
            <Typography variant="h6">{location.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              {location.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Nearby: {location.popularPlace}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default InfoPanel;
