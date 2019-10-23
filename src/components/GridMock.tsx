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

interface GridMockProps {
  numberOfTiles?: number;
  columns?: number,
}

const GridMock = ({ numberOfTiles = 1, columns = 3 }: GridMockProps) => {
  return (
    <Grid
      items={Array(numberOfTiles).fill(null).map((_, key) => key)}
      columns={columns}
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
