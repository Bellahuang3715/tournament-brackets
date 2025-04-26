import React from 'react';
import Expanded9 from '../../components/09-Player/Expanded9';
import { samplePlayers9 } from '../players';

export default {
  title: 'Individuals/09-Player/Expanded',
  component: Expanded9,
  argTypes: {
    players: { control: 'object' },
  },
};

const Template = (args) => <Expanded9 {...args} />;

export const Default = Template.bind({});
Default.args = {
  players: samplePlayers9,
};
