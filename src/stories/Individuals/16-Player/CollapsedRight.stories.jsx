import React from 'react';
import CollapsedRight from '../../../components/Individuals/16-Player/CollapsedRight';
import { samplePlayers16 } from '../../data/players';

export default {
  title: 'Individuals/16-Player/CollapsedRight',
  component: CollapsedRight,
  argTypes: {
    players: { control: 'object' },
  },
};

const Template = (args) => <CollapsedRight {...args} />;

export const Default = Template.bind({});
Default.args = {
  players: samplePlayers16,
};
