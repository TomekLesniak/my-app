import React, { FC } from "react";
import styled from "styled-components";
import { boxShadow } from "../../styledHelpers/boxShadow";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  border: 1px solid grey;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  ${boxShadow};
`;

export const ResumeYourWork: FC = () => {
  return (
    <Wrapper>
      <h1>Resume your work</h1>
    </Wrapper>
  );
};
