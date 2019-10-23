import React, { ReactNode } from "react";
import styled from "styled-components";

interface GridProps<T> {
  items: Array<T>;
  renderItem: (item: T) => ReactNode;
  getKey: (item: T) => string;
}

const GridStyled = styled.div`
  column-count: 3;
`;

const GridItemStyled = styled.div`
  margin-bottom: 15px;
  padding: 2px;
  break-inside: avoid-column;
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
