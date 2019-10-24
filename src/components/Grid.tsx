import React, { ReactNode } from "react";
import styled, { css } from "styled-components";

interface GridProps<T> {
  columns?: number;
  items: Array<T>;
  renderItem: (item: T) => ReactNode;
  getKey: (item: T) => string;
}

const GridStyled = styled.div`
  ${({ columns }: { columns: number }) =>
    css`
      column-count: ${columns};
    `}
`;

const GridItemStyled = styled.div`
  margin-bottom: 15px;
  padding: 2px;
  break-inside: avoid-column;
`;

function Grid<T extends {}>({ items, renderItem, columns = 3 }: GridProps<T>) {
  return (
    <GridStyled columns={columns}>
      {items.map((item, index) => (
        <GridItemStyled key={index}>{renderItem(item)}</GridItemStyled>
      ))}
    </GridStyled>
  );
}

export default Grid;
