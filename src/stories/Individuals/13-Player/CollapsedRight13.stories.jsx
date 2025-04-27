import React from 'react';
import CollapsedRight13 from '../../../components/Individuals/13-Player/CollapsedRight13';
import { samplePlayers13 } from '../../data/players';

export default {
  title: 'Individuals/13-Player/CollapsedRight',
  component: CollapsedRight13,
  argTypes: {
    players: { control: 'object' },
  },
};

const Template = (args) => <CollapsedRight13 {...args} />;

export const Default = Template.bind({});
Default.args = {
  players: samplePlayers13,
};
