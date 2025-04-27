import React from 'react';
import CollapsedLeft13 from '../../components/13-Player/CollapsedLeft13';
import { samplePlayers13 } from '../players';

export default {
  title: 'Individuals/13-Player/CollapsedLeft',
  component: CollapsedLeft13,
  argTypes: {
    players: { control: 'object' },
  },
};

const Template = (args) => <CollapsedLeft13 {...args} />;

export const Default = Template.bind({});
Default.args = {
  players: samplePlayers13,
};
