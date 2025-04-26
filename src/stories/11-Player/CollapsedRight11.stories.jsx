import React from 'react';
import CollapsedRight11 from '../../components/11-Player/CollapsedRight11';
import { samplePlayers11 } from '../players';

export default {
  title: 'Individuals/11-Player/CollapsedRight',
  component: CollapsedRight11,
  argTypes: {
    players: { control: 'object' },
  },
};

const Template = (args) => <CollapsedRight11 {...args} />;

export const Default = Template.bind({});
Default.args = {
  players: samplePlayers11,
};
