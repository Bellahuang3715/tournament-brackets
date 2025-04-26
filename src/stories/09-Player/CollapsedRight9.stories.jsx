import React from 'react';
import CollapsedRight9 from '../../components/09-Player/CollapsedRight9';
import { samplePlayers9 } from '../players';

export default {
  title: 'Individuals/09-Player/CollapsedRight',
  component: CollapsedRight9,
  argTypes: {
    players: { control: 'object' },
  },
};

const Template = (args) => <CollapsedRight9 {...args} />;

export const Default = Template.bind({});
Default.args = {
  players: samplePlayers9,
};
