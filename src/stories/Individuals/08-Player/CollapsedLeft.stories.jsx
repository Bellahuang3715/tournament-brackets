import React from 'react';
import CollapsedLeft from '../../../components/Individuals/08-Player/CollapsedLeft';
import { samplePlayers8 } from '../../data/players';

export default {
  title: 'Individuals/08-Player/CollapsedLeft',
  component: CollapsedLeft,
  argTypes: {
    players: { control: 'object' },
  },
};

const Template = (args) => <CollapsedLeft {...args} />;

export const Default = Template.bind({});
Default.args = {
  players: samplePlayers8,
};
