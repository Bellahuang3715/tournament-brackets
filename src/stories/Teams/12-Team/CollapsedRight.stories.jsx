import React from "react";
import CollapsedRight from "../../../components/Teams/12-Team/CollapsedRight";

export default {
  title: "Teams/12-Team/CollapsedRight",
  component: CollapsedRight,
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

const Template = (args) => <CollapsedRight {...args} />;

export const Default = Template.bind({});
Default.args = {
  teamIDFontFamily: 'Arial, sans-serif',
  teamIDColor:      '#c00',
  teamIDFontSize:   11,
};
