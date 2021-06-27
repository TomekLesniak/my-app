import React, { FC } from "react";
import styled from "styled-components";
import { PrimaryText } from "../../styledHelpers/textHelpers";

const Wrapper = styled.span`
  display: inline-block;
  font-size: 1.3rem;
  min-width: 75px;
  text-align: center;
  margin: 0 0.5rem;
  height: 1rem;
`;

const Arrow = styled.img`
  margin-left: 0.5rem;
  position: relative;
  top: -3px;
`;

interface Props {
  text: string;
  displayArrow: boolean;
}

export const Filter: FC<Props> = ({ text, displayArrow }: Props) => {
  return (
    <Wrapper>
      <PrimaryText>{text}</PrimaryText>
      {displayArrow && <Arrow src={"./icons/arrow-down.svg"} />}
    </Wrapper>
  );
};
