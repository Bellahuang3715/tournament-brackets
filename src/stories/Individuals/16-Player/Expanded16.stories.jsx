import React from 'react';
import Expanded16 from '../../../components/Individuals/16-Player/Expanded16';
import { samplePlayers16 } from '../../data/players';

export default {
  title: 'Individuals/16-Player/Expanded',
  component: Expanded16,
  argTypes: {
    players: { control: 'object' },
  },
};

const Template = (args) => <Expanded16 {...args} />;

export const Default = Template.bind({});
Default.args = {
  players: samplePlayers16,
};
