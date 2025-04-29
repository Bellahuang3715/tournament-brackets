import React from 'react';
import CollapsedLeft from '../../../components/Individuals/13-Player/CollapsedLeft';
import { samplePlayers13 } from '../../data/players';

export default {
  title: 'Individuals/13-Player/CollapsedLeft',
  component: CollapsedLeft,
  argTypes: {
    players: { control: 'object' },
  },
};

const Template = (args) => <CollapsedLeft {...args} />;

export const Default = Template.bind({});
Default.args = {
  players: samplePlayers13,
};
