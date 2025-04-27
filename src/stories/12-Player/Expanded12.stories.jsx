import React from 'react';
import Expanded12 from '../../components/12-Player/Expanded12';
import { samplePlayers12 } from '../players';

export default {
  title: 'Individuals/12-Player/Expanded',
  component: Expanded12,
  argTypes: {
    players: { control: 'object' },
  },
};

const Template = (args) => <Expanded12 {...args} />;

export const Default = Template.bind({});
Default.args = {
  players: samplePlayers12,
};
