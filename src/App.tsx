import React from "react";
import MainLayout from "./layout/MainLayout";

import ImagesGrid from "./ImagesGrid";
import Details from "./Details";
import TopBar from "./TopBar";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Helvetica, Arial, Sans-Serif;
    background: #e4ebf1;
  }
`;

const App: React.FC = () => (
  <>
    <MainLayout
      renderContent={() => <ImagesGrid />}
      renderSidebar={() => <Details />}
      renderTopbar={() => <TopBar />}
    />
    <GlobalStyle />
  </>
);

export default App;
