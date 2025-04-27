import React from 'react';
import CollapsedLeft8 from '../../../components/Individuals/08-Player/CollapsedLeft8';
import { samplePlayers8 } from '../../data/players';

export default {
  title: 'Individuals/08-Player/CollapsedLeft',
  component: CollapsedLeft8,
  argTypes: {
    players: { control: 'object' },
  },
};

const Template = (args) => <CollapsedLeft8 {...args} />;

export const Default = Template.bind({});
Default.args = {
  players: samplePlayers8,
};
