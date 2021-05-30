import React, { FC } from "react";
import styled from "styled-components";
import { boxShadow } from "../../styledHelpers/boxShadow";
import { Colors } from "../../styledHelpers/Colors";

const Wrapper = styled.div`
  height: 35vh;
  display: flex;
  border: 1px solid ${Colors.bordersColor};
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: ${Colors.primaryColor};
  ${boxShadow};
`;

export const Slider: FC = () => {
  return (
    <Wrapper>
      <p>Latest Publications</p>
    </Wrapper>
  );
};
