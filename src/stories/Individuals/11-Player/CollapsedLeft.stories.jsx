import React from 'react';
import CollapsedLeft from '../../../components/Individuals/11-Player/CollapsedLeft';
import { samplePlayers11 } from '../../data/players';

export default {
  title: 'Individuals/11-Player/CollapsedLeft',
  component: CollapsedLeft,
  argTypes: {
    players: { control: 'object' },
  },
};

const Template = (args) => <CollapsedLeft {...args} />;

export const Default = Template.bind({});
Default.args = {
  players: samplePlayers11,
};
