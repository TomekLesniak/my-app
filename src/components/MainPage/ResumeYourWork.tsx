import React, { FC } from "react";
import styled from "styled-components";
import { boxShadow } from "../../styledHelpers/boxShadow";
import { Colors } from "../../styledHelpers/Colors";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  border: 1px solid ${Colors.bordersColor};
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: ${Colors.primaryColor};
  ${boxShadow};
`;

export const ResumeYourWork: FC = () => {
  return (
    <Wrapper>
      <h1>Resume your work</h1>
    </Wrapper>
  );
};
