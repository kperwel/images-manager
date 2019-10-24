import React, { useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";

const pulse = keyframes`
  0% {
    transform: translateX(-45%);
  }

  50% {
    transform: translateX(-55%);
  }
  
  100% {
    transform: translateX(-45%);
  }
`;


const progressStyles = ({ progress }: ProgressIndicatorStyledProps) =>
  progress
    ? css`
        animation: ${pulse} 2s ease-in-out infinite;
        opacity: 1;
      `
    : css`
        transform: translateX(-100%);
        opacity: 0;
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
    transition: transform 300ms, opacity 600ms;

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
  }, [inProgress]); // eslint-disable-line react-hooks/exhaustive-deps

  return <Bar progress={inProgress} done={done && !inProgress} />;
};

export default ProgressIndicator;
