import React from "react";
import Expanded from "../../../components/Teams/08-Team/Expanded";

export default {
  title: "Teams/08-Team/Expanded",
  component: Expanded,
  argTypes: {
    teamIDFontFamily: {
      control: "text",
      description: "CSS font-family for the team-ID cell",
    },
    teamIDColor: {
      control: "color",
      description: "CSS text color for the team-ID cell",
    },
    teamIDFontSize: {
      control: { type: "number", min: 6, max: 72, step: 1 },
      description: "Font size (in points) for the team-ID cell",
    },
  },
};

const Template = (args) => <Expanded {...args} />;

export const Default = Template.bind({});
Default.args = {
  teamIDFontFamily: "Arial, sans-serif",
  teamIDColor: "#c00",
  teamIDFontSize: 14,
};
