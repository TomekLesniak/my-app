import React, { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 25vh;
  display: flex;
  border: 1px solid grey;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export const Workspaces: FC = () => {
  return (
    <Wrapper>
      <p>Workspaces</p>
    </Wrapper>
  );
};
