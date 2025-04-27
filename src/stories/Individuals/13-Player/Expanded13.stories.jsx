import React from 'react';
import Expanded13 from '../../../components/Individuals/13-Player/Expanded13';
import { samplePlayers13 } from '../../data/players';

export default {
  title: 'Individuals/13-Player/Expanded',
  component: Expanded13,
  argTypes: {
    players: { control: 'object' },
  },
};

const Template = (args) => <Expanded13 {...args} />;

export const Default = Template.bind({});
Default.args = {
  players: samplePlayers13,
};
