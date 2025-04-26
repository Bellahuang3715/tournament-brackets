import React from 'react';
import CollapsedLeft10 from '../../components/10-Player/CollapsedLeft10';
import { samplePlayers10 } from '../players';

export default {
  title: 'Individuals/10-Player/CollapsedLeft',
  component: CollapsedLeft10,
  argTypes: {
    players: { control: 'object' },
  },
};

const Template = (args) => <CollapsedLeft10 {...args} />;

export const Default = Template.bind({});
Default.args = {
  players: samplePlayers10,
};
