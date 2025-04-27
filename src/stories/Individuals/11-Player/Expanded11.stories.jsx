import React from 'react';
import Expanded11 from '../../../components/Individuals/11-Player/Expanded11';
import { samplePlayers11 } from '../../data/players';

export default {
  title: 'Individuals/11-Player/Expanded',
  component: Expanded11,
  argTypes: {
    players: { control: 'object' },
  },
};

const Template = (args) => <Expanded11 {...args} />;

export const Default = Template.bind({});
Default.args = {
  players: samplePlayers11,
};
