import React, { ReactNode } from "react";
import styled from "styled-components";

interface MainLayoutProps {
  renderContent: () => ReactNode;
  renderSidebar: () => ReactNode;
  renderTopbar: () => ReactNode;
}

const ContainerStyled = styled.div``;
const ContentStyled = styled.div`
  padding: 10px;
  width: calc(100% / 3 * 2);
  margin-top: 40px;
`;
const TopbarStyled = styled.div`
  position: fixed;
  width: 100%;
  z-index: 1;
`;
const SidebarStyled = styled.div`
  margin-top: 40px;
  position: fixed;
  right: 0;
  width: calc(100% / 3);
  height: 100%;
`;
const ContentContainerStyled = styled.div`
  width: 100%;
  display: flex;
`;

const MainLayout = ({
  renderContent,
  renderSidebar,
  renderTopbar
}: MainLayoutProps) => (
  <ContainerStyled>
    <TopbarStyled>{renderTopbar()}</TopbarStyled>
    <ContentContainerStyled>
      <ContentStyled>{renderContent()}</ContentStyled>
      <SidebarStyled>{renderSidebar()}</SidebarStyled>
    </ContentContainerStyled>
  </ContainerStyled>
);

export default MainLayout;
