import React from "react";
import styled, { css } from "styled-components";

const MockedLine = styled.span`
  height: 1em;
  width: 100%;
  background: #aaa;
  display: inline-block;

  ${({ last }: { last: boolean }) =>
    last
      ? css`
          width: 50%;
        `
      : ""}
`;

interface TextMockProps {
  lines?: number;
}

const TextMock = ({ lines = 1 }: TextMockProps) => {
  return (
    <>
      {Array(lines)
        .fill(null)
        .map((_, index: number) => (
          <MockedLine key={index} last={index === lines - 1} />
        ))}
    </>
  );
};

export default TextMock;
