import React, { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors";
import { ProfileTextBoldHeader } from "../../styledHelpers/profileHelpers";
import { ProfileTable } from "./ProfileTable";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SeeMoreText = styled.span`
  display: inline-block;
  align-self: flex-end;
  color: ${Colors.lightBlueTextColor};
  padding: 0.5rem;
  letter-spacing: 1px;
`;

interface Props {
  isEditing: boolean;
}

export const ProfilePropsals: FC<Props> = ({ isEditing }: Props) => {
  const headers = ["Name", "Entity", "Location", "Expertise", "Date", "Firm"];
  const records = [
    [
      "Opeartion Time",
      "Renault Company",
      "France",
      "#Tax",
      "20/01/2018",
      "Racine",
    ],
    [
      "Opeartion Prometheus",
      "Renault HQ",
      "USA",
      "#M&A",
      "16/01/2018",
      "Clifford change",
    ],
    [
      "Opeartion Latandre",
      "Renault Brasil",
      "Italia",
      "#Social",
      "18/01/2018",
      "SVZ",
    ],
  ];

  return (
    <Wrapper>
      <ProfileTextBoldHeader>Proposals</ProfileTextBoldHeader>
      <ProfileTable
        isEditing={isEditing}
        headers={headers}
        records={records}
      ></ProfileTable>
      <SeeMoreText>See more proposals</SeeMoreText>
    </Wrapper>
  );
};
