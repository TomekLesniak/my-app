import React, { FC } from "react";
import styled from "styled-components";
import { ProfileTextBoldHeader } from "../../styledHelpers/profileHelpers";
import { ProfileTable } from "./ProfileTable";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

interface Props {
  isEditing: boolean;
}

export const ProfileFees: FC<Props> = ({ isEditing }: Props) => {
  const headers = ["Year", "Cost center", "Total amount", "Law firm"];
  const records = [
    ["2019", "CS 153", "3 500 $", "Clifford chance"],
    ["2018", "CS 153", "9 500 $", "Linklaters"],
    ["2017", "CS 47", "10 500 $", "Linklaters"],
    ["", "CS 153", "18 500 $", "Linklaters"],
    ["", "CS 32", "15 500 $", "Linklaters"],
  ];

  return (
    <Wrapper>
      <ProfileTextBoldHeader>Amount of fees</ProfileTextBoldHeader>
      <ProfileTable isEditing={isEditing} headers={headers} records={records} />
    </Wrapper>
  );
};
