import React, { FC } from "react";
import styled from "styled-components";
import {
  ProfileTextBold,
  ProfileTextBoldHeader,
} from "../../styledHelpers/profileHelpers";
import { ProfileTable } from "./ProfileTable";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  span:nth-child(3) {
    padding: 0.5rem;
  }
`;

interface Props {
  isEditing: boolean;
}

export const ProfileReviews: FC<Props> = ({ isEditing }: Props) => {
  const headers = ["Name", "Entity", "Location", "Expertise", "Date"];
  const records = [
    ["Opeartion Time", "Renault Company", "France", "#Tax", "20/01/2018"],
    ["Opeartion Prometheus", "Renault HQ", "USA", "#M&A", "16/01/2018"],
    ["Opeartion Latandre", "Renault Brasil", "Italia", "#Social", "18/01/2018"],
  ];

  return (
    <Wrapper>
      <ProfileTextBoldHeader>Internal reviews</ProfileTextBoldHeader>
      <ProfileTable isEditing={isEditing} headers={headers} records={records} />
      <ProfileTextBold>See more reviews</ProfileTextBold>
    </Wrapper>
  );
};
