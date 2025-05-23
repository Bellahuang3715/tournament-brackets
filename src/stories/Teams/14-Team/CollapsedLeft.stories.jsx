import React from "react";
import CollapsedLeft from "../../../components/Teams/14-Team/CollapsedLeft";

export default {
  title: "Teams/14-Team/CollapsedLeft",
  component: CollapsedLeft,
  argTypes: {
    teamIDFontFamily: {
      control: 'text',
      description: 'CSS font-family for the team-ID cell'
    },
    teamIDColor: {
      control: 'color',
      description: 'CSS text color for the team-ID cell'
    },
    teamIDFontSize: {
      control:    { type: 'number', min: 6, max: 72, step: 1 },
      description:'Font size (in points) for the team-ID cell',
    },
  }
};

const Template = (args) => <CollapsedLeft {...args} />;

export const Default = Template.bind({});
Default.args = {
  teamIDFontFamily: 'Arial, sans-serif',
  teamIDColor:      '#c00',
  teamIDFontSize:   11,
};
