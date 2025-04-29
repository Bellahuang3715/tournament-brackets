import React from 'react';
import Expanded from '../../../components/Individuals/14-Player/Expanded';
import { samplePlayers14 } from '../../data/players';

export default {
  title: 'Individuals/14-Player/Expanded',
  component: Expanded,
  argTypes: {
    players: { control: 'object' },
  },
};

const Template = (args) => <Expanded {...args} />;

export const Default = Template.bind({});
Default.args = {
  players: samplePlayers14,
};
