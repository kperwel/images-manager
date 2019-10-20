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
`;
const TopbarStyled = styled.div``;
const SidebarStyled = styled.div``;
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
