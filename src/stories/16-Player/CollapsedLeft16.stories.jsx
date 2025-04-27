import React from 'react';
import CollapsedLeft16 from '../../components/16-Player/CollapsedLeft16';
import { samplePlayers16 } from '../players';

export default {
  title: 'Individuals/16-Player/CollapsedLeft',
  component: CollapsedLeft16,
  argTypes: {
    players: { control: 'object' },
  },
};

const Template = (args) => <CollapsedLeft16 {...args} />;

export const Default = Template.bind({});
Default.args = {
  players: samplePlayers16,
};
