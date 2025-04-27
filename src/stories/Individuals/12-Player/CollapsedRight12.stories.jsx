import React from 'react';
import CollapsedRight12 from '../../../components/Individuals/12-Player/CollapsedRight12';
import { samplePlayers12 } from '../../data/players';

export default {
  title: 'Individuals/12-Player/CollapsedRight',
  component: CollapsedRight12,
  argTypes: {
    players: { control: 'object' },
  },
};

const Template = (args) => <CollapsedRight12 {...args} />;

export const Default = Template.bind({});
Default.args = {
  players: samplePlayers12,
};
