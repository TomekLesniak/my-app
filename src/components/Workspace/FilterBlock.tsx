import React, { FC } from "react";
import styled from "styled-components";
import { PrimaryTextBold } from "../../styledHelpers/textHelpers";

const Wrapper = styled.div<WrapperProps>`
  margin: 0.1rem 0.2rem;
  display: flex;
  background-color: ${(props) => props.color};
  padding: 0.3rem;
  border-radius: 10px;
  img {
    margin-right: 0.5rem;
    height: 1.2rem;
  }
`;

interface WrapperProps {
  color: string;
}

interface Props {
  color: string;
  text: string;
  icon?: string;
}

export const FilterBlock: FC<Props> = ({ color, text, icon }: Props) => {
  return (
    <Wrapper color={color}>
      {icon && <img src={icon} alt="icon" />}
      <PrimaryTextBold>{text}</PrimaryTextBold>
    </Wrapper>
  );
};
