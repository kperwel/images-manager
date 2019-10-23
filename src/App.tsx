import React from "react";
import { createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router } from "react-router-dom";

import configureStore from "./store";

import MainLayout from "./layout/MainLayout";
import Grid from "./images/ImagesGrid";
import Details from "./images/Details";
import TopBar from "./TopBar";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Helvetica, Arial, Sans-Serif;
    background: #e4ebf1;
  }

  #root {
    min-height: 100vh;
  }
`;

const App: React.FC = () => { 
  return (
  <Provider store={configureStore()}>
    <Router>
      <Route path="/:imageId?">
        <MainLayout
          renderContent={() => <Grid />}
          renderSidebar={() => <Details />}
          renderTopbar={() => <TopBar />}
        />
      </Route>
    </Router>
    <GlobalStyle />
  </Provider>
)};

export default App;
