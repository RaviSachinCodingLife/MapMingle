import { FC, Fragment } from "react";
import { Typography, Divider } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import * as style from "./style";
import { CustomAccordionProps } from "./type";

const CustomAccordion: FC<CustomAccordionProps> = ({ items }) => {
  return (
    <Fragment>
      {items.map((item, index) => (
        <Fragment key={index}>
          <style.StyledAccordion>
            <style.StyledAccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#aaa" }} />}
            >
              <Typography>{item.title}</Typography>
            </style.StyledAccordionSummary>
            <style.StyledAccordionDetails>
              {item.content}
            </style.StyledAccordionDetails>
          </style.StyledAccordion>
          {index !== items.length - 1 && (
            <Divider sx={{ backgroundColor: "#333" }} />
          )}
        </Fragment>
      ))}
    </Fragment>
  );
};

export default CustomAccordion;
