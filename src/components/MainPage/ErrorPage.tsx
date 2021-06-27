import React, { FC } from "react";
import styled from "styled-components";
import { boxShadow } from "../../styledHelpers/boxShadow";

const Wrapper = styled.div`
  min-height: 50vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  flex-direction: column;
  ${boxShadow};
`;

export const ErrorPage: FC = () => {
  return <Wrapper>ERROR PAGE - NO COMPONENT WAS MEANT TO BE MADE HERE.</Wrapper>;
};
