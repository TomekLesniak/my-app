import React, { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors";

interface Props {
  iconSrc: string;
  message: string;
}

const Wrapper = styled.div`
  display: flex;
`;

const ProfileText = styled.span`
  color: ${Colors.primaryTextColor};
  display: inline-block;
  font-weight: 500;
  margin-left: 0.5rem;
  letter-spacing: 1px;
`;

const ProfileIcon = styled.img`
  width: 1rem;
  height: 1.3rem;
`;

export const ProfileAction: FC<Props> = ({ iconSrc, message }: Props) => {
  return (
    <Wrapper>
      <ProfileIcon src={iconSrc} />
      <ProfileText>{message}</ProfileText>
    </Wrapper>
  );
};
