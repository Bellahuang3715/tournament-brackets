import React from 'react';
import Expanded14 from '../../../components/Individuals/14-Player/Expanded14';
import { samplePlayers14 } from '../../data/players';

export default {
  title: 'Individuals/14-Player/Expanded',
  component: Expanded14,
  argTypes: {
    players: { control: 'object' },
  },
};

const Template = (args) => <Expanded14 {...args} />;

export const Default = Template.bind({});
Default.args = {
  players: samplePlayers14,
};
