import React from 'react';
import Expanded from '../../../components/Individuals/15-Player/Expanded';
import { samplePlayers15 } from '../../data/players';

const FONT_CHOICES = [
  "Arial, sans-serif",
  "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
  "Roboto, Helvetica, Arial, sans-serif",
  "Georgia, serif",
  "Courier New, monospace",
];

export default {
  title: 'Individuals/15-Player/Expanded',
  component: Expanded,
  argTypes: {
    mode: {
      control: "radio",
      options: ["view", "fillable"],
      description: "view: read-only; fillable: editable player fields",
    },
    players: { control: "object" },

    // --- Player ID knobs ---
    idFontFamily: { control: "select", options: FONT_CHOICES },
    idFontSize: {
      control: { type: "number", min: 6, max: 72, step: 1 },
      description: "Player ID font size (pt)",
    },
    idColor: { control: "color" },

    // --- Player text knobs (name/club) ---
    textFontFamily: { control: "select", options: FONT_CHOICES },
    textFontSize: {
      control: { type: "number", min: 6, max: 72, step: 1 },
      description: "Player name/club font size (pt)",
    },
    textColor: { control: "color" },
  },
};

const Template = (args) => {
  const {
    idFontFamily,
    idFontSize,
    idColor,
    textFontFamily,
    textFontSize,
    textColor,
    ...rest
  } = args;

  return (
    <Expanded
      {...rest}
      textStyles={{
        playerId: {
          fontFamily: idFontFamily,
          fontSize: idFontSize,
          color: idColor,
        },
        playerText: {
          fontFamily: textFontFamily,
          fontSize: textFontSize,
          color: textColor,
        },
      }}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  mode: "view",
  players: samplePlayers15,

  idFontFamily: "Arial, sans-serif",
  idFontSize: 14,
  idColor: "#000000",

  textFontFamily: "Arial, sans-serif",
  textFontSize: 12,
  textColor: "#000000",
};