import React from 'react';
import CollapsedRight8 from '../../../components/Individuals/08-Player/CollapsedRight8';
import { samplePlayers8 } from '../../data/players';

export default {
  title: 'Individuals/08-Player/CollapsedRight',
  component: CollapsedRight8,
  argTypes: { players: { control: 'object' } },
};

const Template = args => <CollapsedRight8 {...args} />;

export const Default = Template.bind({});
Default.args = {
  players: samplePlayers8,
};
