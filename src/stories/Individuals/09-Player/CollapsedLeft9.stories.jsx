import React from 'react';
import CollapsedLeft9 from '../../../components/Individuals/09-Player/CollapsedLeft9';
import { samplePlayers9 } from '../../data/players';

export default {
  title: 'Individuals/09-Player/CollapsedLeft',
  component: CollapsedLeft9,
  argTypes: {
    players: { control: 'object' },
  },
};

const Template = (args) => <CollapsedLeft9 {...args} />;

export const Default = Template.bind({});
Default.args = {
  players: samplePlayers9,
};
