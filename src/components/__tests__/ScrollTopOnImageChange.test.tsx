import React from "react";
import { render } from "@testing-library/react";

import ScrollTopOnImageChange from "../ScrollTopOnImageChange";
import { Router, Route } from "react-router";
import { createMemoryHistory } from "history";

describe("ScrollTopOnImageChange", () => {
  it("Should scroll to top on id changed in routing change", () => {
    window.scrollTo = jest.fn();

    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <Route path="/:imageId?">
          <ScrollTopOnImageChange />
        </Route>
      </Router>
    );

    history.push("/1");
    history.push("/2");

    expect(window.scrollTo).toBeCalledTimes(2);
  });
});
