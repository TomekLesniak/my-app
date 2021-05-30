import React, { FC, useState } from "react";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors";
import { ProfileGrayedText } from "../../styledHelpers/profileHelpers";

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

export const ProfileTags: FC = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <TagsWrapper>
      <HeaderRow>
        <ProfileGrayedText>Expertise</ProfileGrayedText>
        <img src="./icons/settings.svg" alt="Edit" />
      </HeaderRow>
      <TagsRow>
        <TagWrapper>Mergers and acquisiton</TagWrapper>
      </TagsRow>
      <ProfileGrayedText>Specialities</ProfileGrayedText>
      <TagsRow>
        <TagWrapper>Cross border operation</TagWrapper>
        <TagWrapper>Transaction over 500M$</TagWrapper>
        <TagWrapper>Lorem ipsum dolor sit amet.</TagWrapper>
      </TagsRow>
      <ProfileGrayedText>Admission to practice law</ProfileGrayedText>
      <TagsRow>
        <TagWrapper>Paris bar association</TagWrapper>
        <TagWrapper>Tunisian bar association</TagWrapper>
        <TagWrapper>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </TagWrapper>
      </TagsRow>
      <ProfileGrayedText>Counties</ProfileGrayedText>
      <TagsRow>
        <TagWrapper>Tunisia</TagWrapper>
        <TagWrapper>Proland</TagWrapper>
      </TagsRow>
    </TagsWrapper>
  );
};
