import React, { FC } from "react";
import styled from "styled-components";
import { LatestUpdates } from "./LatestUpdates";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Workspace: FC = () => {
  return (
    <Wrapper>
      <LatestUpdates />
    </Wrapper>
  );
};
