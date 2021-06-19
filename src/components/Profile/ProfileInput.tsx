import React, { ChangeEvent, FC } from "react";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors";

const MyInput = styled.input`
  display: inline-block;
  font-size: 1.2rem;
  margin-right: 0.2rem;
  letter-spacing: 1px;
  padding: 0.2rem;
  border-radius: 5px;
  border: 1px solid ${Colors.bordersColor};
  color: ${Colors.primaryTextColor};
  font-weight: bold;
`;

interface Props {
  initValue: string;
  callback: (ev: ChangeEvent<HTMLInputElement>) => void;
}

export const ProfileInput: FC<Props> = ({ initValue, callback }: Props) => {
  return <MyInput defaultValue={initValue} onChange={callback} />;
};
