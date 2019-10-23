import React from "react";

import Progress from "../src/components/Progress";

export default {
  title: "Progress indicator"
};

export const inProgress = () => (
  <Progress inProgress={true} />
);