import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

const progressStyles = ({ progress }: ProgressIndicatorStyledProps) =>
  progress
    ? css`
        transform: translateX(-50%);
      `
    : css`
        transform: translateX(-100%);
      `;

const doneStyles = ({ done }: ProgressIndicatorStyledProps) =>
  done
    ? css`
        transform: translateX(0);
        opacity: 0;
      `
    : "";

const Bar = styled.div`
  height: 3px;
  position: relative;
  margin-bottom: 10px;
  overflow: hidden;

  ::after {
    content: "";
    display: block;
    position: absolute;
    background: #666;
    width: 100%;
    top: 0;
    left: 0;
    height: 100%;
    transition: transform 600ms, opacity 600ms;

    ${progressStyles}
    ${doneStyles}
  }
`;

interface ProgressIndicatorProps {
  inProgress: boolean;
}

interface ProgressIndicatorStyledProps {
  progress: boolean;
  done: boolean;
}

const ProgressIndicator = ({ inProgress = false }: ProgressIndicatorProps) => {
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (inProgress) {
      setDone(!done);
    }
  }, [inProgress]);

  return <Bar progress={inProgress} done={done && !inProgress} />;
};

export default ProgressIndicator;
