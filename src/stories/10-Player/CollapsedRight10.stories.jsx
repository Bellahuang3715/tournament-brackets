import React from 'react';
import CollapsedRight10 from '../../components/10-Player/CollapsedRight10';
import { samplePlayers10 } from '../players';

export default {
  title: 'Individuals/10-Player/CollapsedRight',
  component: CollapsedRight10,
  argTypes: {
    players: { control: 'object' },
  },
};

const Template = (args) => <CollapsedRight10 {...args} />;

export const Default = Template.bind({});
Default.args = {
  players: samplePlayers10,
};
