import React from "react";
import styled from "styled-components";

const TileStyled = styled.article`
  background: #fff;
  box-shadow: 0 1px 2px rgba(0,0,0,.2);
`;

const TitleStyled = styled.h2`
    font-size: 13px;
`;

const DescriptionStyled = styled.div`
  margin: 0;
  padding: 10px;
`;

interface TileProps {
  children: React.ReactNode;
  title: string;
}

const Tile = ({ children, title }: TileProps) => (
  <TileStyled>
    {children}
    <DescriptionStyled>
      <TitleStyled>{title}</TitleStyled>
    </DescriptionStyled>
  </TileStyled>
);

export default Tile;
