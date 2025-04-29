import React from 'react';
import Expanded from '../../../components/Individuals/08-Player/Expanded';
import { samplePlayers8 } from '../../data/players';

export default {
  title: 'Individuals/08-Player/Expanded',
  component: Expanded,
  argTypes: { players: { control: 'object' } },
};

const Template = args => <Expanded {...args} />;

export const Default = Template.bind({});
Default.args = {
  players: samplePlayers8,
};
