import React from 'react';
import CollapsedRight from '../../../components/Individuals/12-Player/CollapsedRight';
import { samplePlayers12 } from '../../data/players';

export default {
  title: 'Individuals/12-Player/CollapsedRight',
  component: CollapsedRight,
  argTypes: {
    players: { control: 'object' },
  },
};

const Template = (args) => <CollapsedRight {...args} />;

export const Default = Template.bind({});
Default.args = {
  players: samplePlayers12,
};
