import React from 'react';
import Expanded from '../../../components/Individuals/11-Player/Expanded';
import { samplePlayers11 } from '../../data/players';

export default {
  title: 'Individuals/11-Player/Expanded',
  component: Expanded,
  argTypes: {
    players: { control: 'object' },
  },
};

const Template = (args) => <Expanded {...args} />;

export const Default = Template.bind({});
Default.args = {
  players: samplePlayers11,
};
