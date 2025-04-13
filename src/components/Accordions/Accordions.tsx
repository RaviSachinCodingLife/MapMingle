import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Divider,
  styled,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FC, Fragment } from "react";

type AccordionItem = {
  title: string;
  content: string;
};

type CustomAccordionProps = {
  items: AccordionItem[];
};

// Styled components
const StyledAccordion = styled(Accordion)(() => ({
  backgroundColor: "transparent",
  color: "#fff",
  boxShadow: "none",
  margin: 0,
  "&:before": {
    display: "none",
  },
}));

const StyledAccordionSummary = styled(AccordionSummary)(() => ({
  minHeight: "48px",
  "& .MuiAccordionSummary-content": {
    margin: "12px 0",
  },
  "& .MuiTypography-root": {
    fontSize: "16px",
    fontWeight: 600,
  },
}));

const StyledAccordionDetails = styled(AccordionDetails)(() => ({
  padding: "16px",
  fontSize: "14px",
  color: "#ccc",
  backgroundColor: "transparent",
}));

const CustomAccordion: FC<CustomAccordionProps> = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <Fragment key={index}>
          <StyledAccordion>
            <StyledAccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#aaa" }} />}
            >
              <Typography>{item.title}</Typography>
            </StyledAccordionSummary>
            <StyledAccordionDetails>{item.content}</StyledAccordionDetails>
          </StyledAccordion>
          {index !== items.length - 1 && (
            <Divider sx={{ backgroundColor: "#333" }} />
          )}
        </Fragment>
      ))}
    </>
  );
};

export default CustomAccordion;
