import React, { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors";

export enum ButtonSize {
  small = 200,
  medium = 300,
  large = 400,
  xl = 500,
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  width: ${(props) => props.size}px;
  border: 1px solid ${Colors.bordersColor};
  background: ${Colors.primaryColor};
  border-radius: 5px;
  padding: 0.1rem 0.5rem;
`;

const CustomInput = styled.input`
  flex-grow: 1;
  border: 0;
  outline: 0;
  padding: 0.3rem;
  text-align: center;

  ::placeholder {
    color: grey;
    letter-spacing: 1px;
  }
`;

const InputIcon = styled.img``;

interface WrapperProps {
  size: ButtonSize;
}

interface Props {
  size: ButtonSize;
  placeholder: string;
  onChangeHandler?: () => void;
}

export const SearchInput: FC<Props> = ({ size, placeholder }: Props) => {
  return (
    <Wrapper size={size}>
      <CustomInput placeholder={placeholder}></CustomInput>
      <InputIcon src={"./icons/search.svg"} />
    </Wrapper>
  );
};
