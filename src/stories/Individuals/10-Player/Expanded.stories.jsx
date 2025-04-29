import React from 'react';
import Expanded from '../../../components/Individuals/10-Player/Expanded';
import { samplePlayers10 } from '../../data/players';

export default {
  title: 'Individuals/10-Player/Expanded',
  component: Expanded,
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

const Template = (args) => <Expanded {...args} />;

export const Default = Template.bind({});
Default.args = {
  players:            samplePlayers10,
  fontFamily:         'Arial, sans-serif',
  playerIDFontSize:   14,
  playerNameFontSize: 12,
};
