import React from "react";
import CollapsedLeft from "../../../components/Individuals/06-Player/CollapsedLeft";
import { samplePlayers6 } from "../../data/players";

export default {
  title: "Individuals/06-Player/CollapsedLeft",
  component: CollapsedLeft,
  argTypes: {
    players: { control: "object" },
    playerIdFontFamily: { control: "text" },
    playerIdFontSize: { control: { type: "number", min: 6, max: 72, step: 1 }, description: "ID cell font size in pt" },
    playerIdColor: { control: "color" },
    playerTextFontFamily: { control: "text" },
    playerTextFontSize: { control: { type: "number", min: 6, max: 72, step: 1 }, description: "Name/club cell font size in pt" },
    playerTextColor: { control: "color" },
  },
};

const Template = (args) => {
  const { playerIdFontFamily, playerIdFontSize, playerIdColor, playerTextFontFamily, playerTextFontSize, playerTextColor, ...rest } = args;
  return (
    <CollapsedLeft
      {...rest}
      textStyles={{
        playerId: { fontFamily: playerIdFontFamily, fontSize: playerIdFontSize, color: playerIdColor },
        playerText: { fontFamily: playerTextFontFamily, fontSize: playerTextFontSize, color: playerTextColor },
      }}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  players: samplePlayers6,
  playerIdFontFamily: "Arial, sans-serif",
  playerIdFontSize: 11,
  playerIdColor: "#000000",
  playerTextFontFamily: "Arial, sans-serif",
  playerTextFontSize: 11,
  playerTextColor: "#000000",
};
