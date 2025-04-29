import React from 'react';
import CollapsedRight from '../../../components/Individuals/09-Player/CollapsedRight';
import { samplePlayers9 } from '../../data/players';

export default {
  title: 'Individuals/09-Player/CollapsedRight',
  component: CollapsedRight,
  argTypes: {
    players: { control: 'object' },
  },
};

const Template = (args) => <CollapsedRight {...args} />;

export const Default = Template.bind({});
Default.args = {
  players: samplePlayers9,
};
