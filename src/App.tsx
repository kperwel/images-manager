import React from "react";
import { createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";

import configureStore from "./store";

import MainLayout from "./layout/MainLayout";
import Grid from "./images/Grid";
import Details from "./images/Details";
import TopBar from "./TopBar";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Helvetica, Arial, Sans-Serif;
    background: #e4ebf1;
  }
`;

const App: React.FC = () => (
  <Provider store={configureStore()}>
    <MainLayout
      renderContent={() => <Grid />}
      renderSidebar={() => <Details />}
      renderTopbar={() => <TopBar />}
    />
    <GlobalStyle />
  </Provider>
);

export default App;
