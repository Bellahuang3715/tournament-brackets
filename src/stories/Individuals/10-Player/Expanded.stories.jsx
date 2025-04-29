import React from 'react';
import Expanded from '../../../components/Individuals/10-Player/Expanded';
import { samplePlayers10 } from '../../data/players';

export default {
  title: 'Individuals/10-Player/Expanded',
  component: Expanded,
  argTypes: {
    players: { control: 'object' },
  },
};

const Template = (args) => <Expanded {...args} />;

export const Default = Template.bind({});
Default.args = {
  players: samplePlayers10,
};
