import React from "react";
import styled, { css } from "styled-components";

interface TileProps {
  children: React.ReactNode;
  title: React.ReactNode;
  onClick?: () => void;
  selected?: boolean;
}

const outlineStyle = css`
  outline: 2px dashed red;
`;

const TileStyled = styled.article`
  background: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  position: relative;

  ${({ selected }: Pick<TileProps, "selected">) =>
    selected ? outlineStyle : ""}
`;

const TitleStyled = styled.h2`
  font-size: 13px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const DescriptionStyled = styled.div`
  margin: 0;
  padding: 10px;
`;

const Tile = ({ children, title, onClick, selected = false }: TileProps) => (
  <TileStyled selected={selected} onClick={onClick}>
    {children}
    <DescriptionStyled>
      <TitleStyled>{title}</TitleStyled>
    </DescriptionStyled>
  </TileStyled>
);

export default Tile;
