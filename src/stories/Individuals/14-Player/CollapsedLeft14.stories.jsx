import React from 'react';
import CollapsedLeft14 from '../../../components/Individuals/14-Player/CollapsedLeft14';
import { samplePlayers14 } from '../../data/players';

export default {
  title: 'Individuals/14-Player/CollapsedLeft',
  component: CollapsedLeft14,
  argTypes: {
    players: { control: 'object' },
  },
};

const Template = (args) => <CollapsedLeft14 {...args} />;

export const Default = Template.bind({});
Default.args = {
  players: samplePlayers14,
};
