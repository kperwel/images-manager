import React from "react";
import { action } from "@storybook/addon-actions";
import Tile from "../src/components/Tile";

export default {
  title: "Tile"
};

export const simpleTile = () => (
  <Tile title="Example title">Example content</Tile>
);

export const clickableTile = () => (
  <Tile title="I am clickable" onClick={action("clicked")}>
      Example content
  </Tile>
);

export const selectedTile = () => (
  <Tile title="I am clickable" selected>
      Example content
  </Tile>
);
