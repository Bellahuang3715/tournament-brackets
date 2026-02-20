import React from "react";
import CollapsedLeft from "../../../components/Individuals/16-Player/CollapsedLeft";
import { samplePlayers16 } from "../../data/players";

export default {
  title: "Individuals/16-Player/CollapsedLeft",
  component: CollapsedLeft,
  argTypes: {
    players: { control: "object" },

    // playerId
    playerIdFontFamily: { control: "text" },
    playerIdFontSize: {
      control: { type: "number", min: 6, max: 72, step: 1 },
      description: "ID cell font size in pt",
    },
    playerIdColor: { control: "color" },

    // playerText
    playerTextFontFamily: { control: "text" },
    playerTextFontSize: {
      control: { type: "number", min: 6, max: 72, step: 1 },
      description: "Name/club cell font size in pt",
    },
    playerTextColor: { control: "color" },
  },
};

const Template = (args) => {
  const {
    playerIdFontFamily,
    playerIdFontSize,
    playerIdColor,
    playerTextFontFamily,
    playerTextFontSize,
    playerTextColor,
    ...rest
  } = args;

  return (
    <CollapsedLeft
      {...rest}
      textStyles={{
        playerId: {
          fontFamily: playerIdFontFamily,
          fontSize: playerIdFontSize,
          color: playerIdColor,
        },
        playerText: {
          fontFamily: playerTextFontFamily,
          fontSize: playerTextFontSize,
          color: playerTextColor,
        },
      }}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  players: samplePlayers16,

  playerIdFontFamily: "Arial, sans-serif",
  playerIdFontSize: 11,
  playerIdColor: "#000000",

  playerTextFontFamily: "Arial, sans-serif",
  playerTextFontSize: 11,
  playerTextColor: "#000000",
};
