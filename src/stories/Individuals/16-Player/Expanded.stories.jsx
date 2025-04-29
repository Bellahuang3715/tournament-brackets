import React from 'react';
import Expanded from '../../../components/Individuals/16-Player/Expanded';
import { samplePlayers16 } from '../../data/players';

export default {
  title: 'Individuals/16-Player/Expanded',
  component: Expanded,
  argTypes: {
    players: { control: 'object' },
  },
};

const Template = (args) => <Expanded {...args} />;

export const Default = Template.bind({});
Default.args = {
  players: samplePlayers16,
};
