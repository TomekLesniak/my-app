import React, { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors";

const Wrapper = styled.div`
  height: 25vh;
  display: flex;
  border: 1px solid ${Colors.bordersColor};
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: ${Colors.primaryColor};
`;

export const Workspaces: FC = () => {
  return (
    <Wrapper>
      <p>Workspaces</p>
    </Wrapper>
  );
};
