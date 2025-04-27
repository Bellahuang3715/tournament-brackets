import React from 'react';
import CollapsedLeft11 from '../../../components/Individuals/11-Player/CollapsedLeft11';
import { samplePlayers11 } from '../../data/players';

export default {
  title: 'Individuals/11-Player/CollapsedLeft',
  component: CollapsedLeft11,
  argTypes: {
    players: { control: 'object' },
  },
};

const Template = (args) => <CollapsedLeft11 {...args} />;

export const Default = Template.bind({});
Default.args = {
  players: samplePlayers11,
};
