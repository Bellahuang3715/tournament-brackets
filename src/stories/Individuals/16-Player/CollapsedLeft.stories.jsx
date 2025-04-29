import React from 'react';
import CollapsedLeft from '../../../components/Individuals/16-Player/CollapsedLeft';
import { samplePlayers16 } from '../../data/players';

export default {
  title: 'Individuals/16-Player/CollapsedLeft',
  component: CollapsedLeft,
  argTypes: {
    players: { control: 'object' },
  },
};

const Template = (args) => <CollapsedLeft {...args} />;

export const Default = Template.bind({});
Default.args = {
  players: samplePlayers16,
};
