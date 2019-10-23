import React from "react";
import Grid from "../src/components/Grid";

export default {
  title: "Grid"
};

const MockItems = ({ height }: { height: number }) => (
  <div style={{ width: "100%", height: 200 * height, background: "#666" }}></div>
);

export const simpleGrid = () => (
  <Grid items={[[0, 2],[1, 1],[3, 3],[4, 1],[5, 2],[6, 4],[7, 2],[8, 2],[9, 1]]} getKey={([id]) => String(id)} renderItem={([ _, height ]) => <MockItems height={height} />} />
);
