import React from "react";
import { createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router } from "react-router-dom";

import configureStore from "./store";

import useMedia from "./layout/useMedia";
import DesktopLayout from "./layout/DesktopLayout";
import MobileLayout from "./layout/MobileLayout";
import ScrollTopOnImageChange from "./components/ScrollTopOnImageChange";
import ImagesGrid from "./manager/ImagesGrid/ImagesGrid";
import Details from "./manager/Details/Details";
import TopBar from "./manager/TopBar/TopBar";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Helvetica, Arial, Sans-Serif;
    background: #e4ebf1;
  }
`;

const App: React.FC = () => {
  const mobile = useMedia(
    ["(max-width: 601px)", "(min-width: 600px)"],
    [true, false],
    true
  );
  return (
    <Provider store={configureStore()}>
      <Router>
        <Route path="/:imageId?">
          {mobile ? (
            <MobileLayout
              renderContent={() => (
                <>
                  <ScrollTopOnImageChange />
                  <Details />
                  <ImagesGrid columns={1} />
                </>
              )}
              renderTopbar={() => <TopBar />}
            />
          ) : (
            <DesktopLayout
              renderContent={() => <ImagesGrid columns={3} />}
              renderSidebar={() => <Details />}
              renderTopbar={() => <TopBar />}
            />
          )}
        </Route>
      </Router>
      <GlobalStyle />
    </Provider>
  );
};

export default App;
