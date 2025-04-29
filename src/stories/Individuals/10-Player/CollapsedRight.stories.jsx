import React from 'react';
import CollapsedRight from '../../../components/Individuals/10-Player/CollapsedRight';
import { samplePlayers10 } from '../../data/players';

export default {
  title: 'Individuals/10-Player/CollapsedRight',
  component: CollapsedRight,
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

const Template = (args) => <CollapsedRight {...args} />;

export const Default = Template.bind({});
Default.args = {
  players:            samplePlayers10,
  fontFamily:         'Arial, sans-serif',
  playerIDFontSize:   11,
  playerNameFontSize: 11,
};
