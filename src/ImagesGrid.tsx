import React from "react";

import Grid from "./components/grid";
import ImageView from "./components/image";
import Tile from "./components/tile";

import { createMock } from "./api/mock";

const ImagesGrid = () => {
  const images = createMock();

  return (
    <Grid
      items={images}
      getKey={image => image.id}
      renderItem={image => (
        <Tile title={image.title}>
          <ImageView url={image.url} title={image.title} />
        </Tile>
      )}
    />
  );
};

export default ImagesGrid;
