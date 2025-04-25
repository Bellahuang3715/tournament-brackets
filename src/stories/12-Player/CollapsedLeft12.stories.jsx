import React from 'react';
import CollapsedLeft12 from '../../components/12-Player/CollapsedLeft12';
import { samplePlayers12 } from '../players';

export default {
  title: 'Individuals/12-Player/CollapsedLeft',
  component: CollapsedLeft12,
  argTypes: {
    players: { control: 'object' },
  },
};

const Template = (args) => <CollapsedLeft12 {...args} />;

export const Default = Template.bind({});
Default.args = {
  players: samplePlayers12,
};
