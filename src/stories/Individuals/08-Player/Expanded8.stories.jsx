import React from 'react';
import Expanded8 from '../../../components/Individuals/08-Player/Expanded8';
import { samplePlayers8 } from '../../data/players';

export default {
  title: 'Individuals/08-Player/Expanded',
  component: Expanded8,
  argTypes: { players: { control: 'object' } },
};

const Template = args => <Expanded8 {...args} />;

export const Default = Template.bind({});
Default.args = {
  players: samplePlayers8,
};
