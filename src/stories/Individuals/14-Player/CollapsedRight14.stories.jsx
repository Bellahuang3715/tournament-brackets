import React from 'react';
import CollapsedRight14 from '../../../components/Individuals/14-Player/CollapsedRight14';
import { samplePlayers14 } from '../../data/players';

export default {
  title: 'Individuals/14-Player/CollapsedRight',
  component: CollapsedRight14,
  argTypes: {
    players: { control: 'object' },
  },
};

const Template = (args) => <CollapsedRight14 {...args} />;

export const Default = Template.bind({});
Default.args = {
  players: samplePlayers14,
};
