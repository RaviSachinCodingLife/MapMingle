import { Box, Typography } from "@mui/material";

interface InfoListProps {
  title?: string;
  items: string[];
}

const InfoList = ({ title, items }: InfoListProps) => {
  return (
    <Box sx={{ px: 2, py: 3 }}>
      {title && (
        <Typography variant="h6" color={"grey"} fontWeight={600} gutterBottom>
          {title}
        </Typography>
      )}
      <ol style={{color:"grey", paddingLeft: "20px", margin: 0 }}>
        {items.map((item, index) => (
          <li key={index}>
            <Typography variant="body2" color={"grey"} component="span">
              {item}
            </Typography>
          </li>
        ))}
      </ol>
    </Box>
  );
};

export default InfoList;
