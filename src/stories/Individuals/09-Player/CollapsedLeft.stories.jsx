import React from 'react';
import CollapsedLeft from '../../../components/Individuals/09-Player/CollapsedLeft';
import { samplePlayers9 } from '../../data/players';

export default {
  title: 'Individuals/09-Player/CollapsedLeft',
  component: CollapsedLeft,
  argTypes: {
    players:             { control: 'object' },
    fontFamily:          { control: 'text' },
    playerIDFontSize:    { 
      control: { type:'number', min:6, max:72, step:1 },
      description: 'ID cell font size in pt'
    },
    playerNameFontSize:  { 
      control: { type:'number', min:6, max:72, step:1 },
      description: 'Name cell font size in pt'
    },
  },
};

const Template = (args) => <CollapsedLeft {...args} />;

export const Default = Template.bind({});
Default.args = {
  players:            samplePlayers9,
  fontFamily:         'Arial, sans-serif',
  playerIDFontSize:   11,
  playerNameFontSize: 11,
};
