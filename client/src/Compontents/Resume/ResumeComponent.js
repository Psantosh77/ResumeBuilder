import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";

import BasicDetails from "../BasicDetails";
import Education from "../Education";
import InternShip from "../internship";

import Training from "../Project";

const ResumeComponent = () => {
  return (
    <div>
      <Accordion >
        <AccordionSummary expandIcon={<ExpandMore />}>
          Basic Details
        </AccordionSummary>

        <AccordionDetails>
          <BasicDetails />
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          Educational Qulification
        </AccordionSummary>
        <AccordionDetails>
          <Education />
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>Project</AccordionSummary>
        <AccordionDetails>
          <Training />
        </AccordionDetails>
      </Accordion>

      
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>Internship And Training</AccordionSummary>
        <AccordionDetails>
          <InternShip />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ResumeComponent;
