import {
  styled,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

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

export { StyledAccordion, StyledAccordionDetails, StyledAccordionSummary };
