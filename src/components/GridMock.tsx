import React from "react";
import styled from "styled-components";
import Tile from "./Tile";
import TextMock from "./TextMock";
import Grid from "./Grid";

const MockedImage = styled.div`
  padding-top: 60%;
  width: 100%;
  background: #eee;
  display: inline-block;
`;

interface TextMockProps {
  numberOfTiles: number;
}

const GridMock = ({ numberOfTiles = 1 }: TextMockProps) => {
  return (
    <Grid
      items={Array(numberOfTiles).fill(null).map((_, key) => key)}
      getKey={id => id.toString()}
      renderItem={() => (
        <Tile title={<TextMock />}>
          <MockedImage />
        </Tile>
      )}
    />
  );
};

export default GridMock;
