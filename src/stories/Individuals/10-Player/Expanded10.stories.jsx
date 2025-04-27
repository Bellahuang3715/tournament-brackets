import React from 'react';
import Expanded10 from '../../../components/Individuals/10-Player/Expanded10';
import { samplePlayers10 } from '../../data/players';

export default {
  title: 'Individuals/10-Player/Expanded',
  component: Expanded10,
  argTypes: {
    players: { control: 'object' },
  },
};

const Template = (args) => <Expanded10 {...args} />;

export const Default = Template.bind({});
Default.args = {
  players: samplePlayers10,
};
