import React, { FC } from "react";
import styled from "styled-components";
import { LatestPublication } from "../../reducers/latestPublicationsStore";
import {
  PrimaryTextBold,
  SecondaryText,
} from "../../styledHelpers/textHelpers";
import { PublicationUser } from "./Slider";

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 0.4rem;
`;

const PublicationImage = styled.img`
  width: 70px;
  height: 70px;
`;

const PublicationDetails = styled.div`
  padding: 0 0.5rem 0.5rem 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1rem;
  margin-left: 0;
`;

const PublicationAdditionalinfo = styled.div`
  display: flex;
  font-size: 0.9rem;
`;

interface Props {
  publicationInfo: LatestPublication;
}

export const PublicationCard: FC<Props> = ({ publicationInfo }: Props) => {
  return (
    <Wrapper>
      <PublicationImage src={publicationInfo.photo} />
      <PublicationDetails>
        <PrimaryTextBold>{publicationInfo.title}</PrimaryTextBold>
        <PublicationAdditionalinfo>
          <SecondaryText>7 Jan, 2020</SecondaryText>
          <PublicationUser>
            <img src={publicationInfo.userPhoto} alt="user" />
            <SecondaryText>{publicationInfo.userName}</SecondaryText>
          </PublicationUser>
        </PublicationAdditionalinfo>
      </PublicationDetails>
    </Wrapper>
  );
};
