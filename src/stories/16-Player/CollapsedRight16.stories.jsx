import React from 'react';
import CollapsedRight16 from '../../components/16-Player/CollapsedRight16';
import { samplePlayers16 } from '../players';

export default {
  title: 'Individuals/16-Player/CollapsedRight',
  component: CollapsedRight16,
  argTypes: {
    players: { control: 'object' },
  },
};

const Template = (args) => <CollapsedRight16 {...args} />;

export const Default = Template.bind({});
Default.args = {
  players: samplePlayers16,
};
