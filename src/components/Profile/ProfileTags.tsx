import React, { FC, useState } from "react";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors";
import { ProfileGrayedText } from "../../styledHelpers/profileHelpers";
import { ProfileInput } from "./ProfileInput";

const TagsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  letter-spacing: 1px;
`;

const HeaderRow = styled.div`
  display: flex;
  flex-grow: 1;
  margin-top: 1rem;
  justify-content: space-between;
  margin-bottom: 0.2rem;
`;

const TagsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0.2rem;

  div {
    margin-right: 0.5rem;
  }
`;

const TagWrapper = styled.div`
  padding: 0.4rem;
  font-size: 1rem;
  background-color: lightblue;
  border-radius: 5px;
  margin-bottom: 0.2rem;
  color: ${Colors.lightBlueTextColor};
`;

const EditIcon = styled.img`
  cursor: pointer;
`;

interface Props {
  isEditing: boolean;
  setIsEditingCallback: () => void;
}

export const ProfileTags: FC<Props> = ({
  isEditing,
  setIsEditingCallback,
}: Props) => {
  const [expertises, setExpertises] = useState(["Mergers and acquisiton"]);
  const [specialities, setSpecialities] = useState([
    "Cross border operation",
    "Transaction over 500M$",
    "Lorem ipsum dolor sit amet.",
  ]);
  const [admissions, setAdmissions] = useState([
    "Paris bar association",
    "Tunisian bar association",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  ]);
  const [counties, setCounties] = useState(["Tunisia", "Proland"]);

  return (
    <TagsWrapper>
      <HeaderRow>
        <ProfileGrayedText>Expertise</ProfileGrayedText>
        <EditIcon
          src="./icons/settings.svg"
          alt="Edit"
          onClick={setIsEditingCallback}
        />
      </HeaderRow>
      <TagsRow>
        {!isEditing &&
          expertises.map((ex) => <TagWrapper key={ex}>{ex}</TagWrapper>)}
        {isEditing &&
          expertises.map((ex, i) => (
            <ProfileInput
              key={ex}
              initValue={ex}
              callback={(ev) => {
                expertises[i] = ev.target.value;
                setExpertises(expertises);
              }}
            />
          ))}
      </TagsRow>
      <ProfileGrayedText>Specialities</ProfileGrayedText>
      <TagsRow>
        {!isEditing &&
          specialities.map((sp) => <TagWrapper key={sp}>{sp}</TagWrapper>)}
        {isEditing &&
          specialities.map((sp, i) => (
            <ProfileInput
              key={sp}
              initValue={sp}
              callback={(ev) => {
                specialities[i] = ev.target.value;
                setSpecialities(specialities);
              }}
            />
          ))}
      </TagsRow>
      <ProfileGrayedText>Admission to practice law</ProfileGrayedText>
      <TagsRow>
        {!isEditing && admissions.map((ad) => <TagWrapper>{ad}</TagWrapper>)}
        {isEditing &&
          admissions.map((ad, i) => (
            <ProfileInput
              key={ad}
              initValue={ad}
              callback={(ev) => {
                admissions[i] = ev.target.value;
                setAdmissions(admissions);
              }}
            />
          ))}
      </TagsRow>
      <ProfileGrayedText>Counties</ProfileGrayedText>
      <TagsRow>
        {!isEditing && counties.map((co) => <TagWrapper>{co}</TagWrapper>)}
        {isEditing &&
          counties.map((co, i) => (
            <ProfileInput
              key={co}
              initValue={co}
              callback={(ev) => {
                counties[i] = ev.target.value;
                setCounties(counties);
              }}
            />
          ))}
      </TagsRow>
    </TagsWrapper>
  );
};
