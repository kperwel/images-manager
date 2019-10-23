import React, { ReactNode } from "react";
import styled from "styled-components";

interface MobileLayoutProps {
  renderContent: () => ReactNode;
  renderTopbar: () => ReactNode;
}

const TopbarStyled = styled.div`
  width: 100%;
  z-index: 1;
`;

const ContentContainerStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const MobileLayout = ({
  renderContent,
  renderTopbar
}: MobileLayoutProps) => (
  <div>
    <TopbarStyled>{renderTopbar()}</TopbarStyled>
    <ContentContainerStyled>
      {renderContent()}
    </ContentContainerStyled>
  </div>
);

export default MobileLayout;
