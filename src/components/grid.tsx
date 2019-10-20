import React, { ReactNode } from "react";
import styled from "styled-components";

interface GridProps<T> {
  items: Array<T>;
  renderItem: (item: T) => ReactNode;
  getKey: (item: T) => string;
}

const GridStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -10px;
`;

const GridItemStyled = styled.div`
  padding: 10px;
`;

function Grid<T extends {}>({ items, renderItem }: GridProps<T>) {
  return (
    <GridStyled>
      {items.map((item, index) => (
        <GridItemStyled key={index}>{renderItem(item)}</GridItemStyled>
      ))}
    </GridStyled>
  );
}

export default Grid;
