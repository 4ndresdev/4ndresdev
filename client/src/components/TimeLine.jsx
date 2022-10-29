import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import CardExperience from "../components/CardExperience";

const TimeLineComponent = () => {
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
        padding: 0,
      }}
    >
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ backgroundColor: "#53BF9D" }} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <CardExperience
            color="3AB0FF"
            worked="Beliveo"
            position="SD Specialist | FullStack Developer"
            from="2021"
            to="2022"
            actual
          />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <CardExperience
            color="A760FF"
            worked="Ayuntamiento de Zapopán Jal"
            position="FullStack Developer"
            from="2021"
            to="2022"
          />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
          <CardExperience
            color="53BF9D"
            worked="Ayuntamiento de Ocotlán Jal"
            position="FullStack Developer"
            from="2021"
            to="2022"
          />
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default TimeLineComponent;
