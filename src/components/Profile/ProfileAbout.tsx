import { observer } from "mobx-react-lite";
import React, { FC, useState } from "react";
import styled from "styled-components";
import { User } from "../../entities/user";
import { Colors } from "../../styledHelpers/Colors";
import {
  ProfileText,
  ProfileTextBold,
} from "../../styledHelpers/profileHelpers";
import { ProfileAction } from "./ProfileAction";

const Wrapper = styled.div`
  //border: 1px solid red;
  //min-height: 20vh;
  width: 100%;
`;

const ActionsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 1.2rem;

  div {
    margin: 0 1rem;
  }
`;

const DetailsWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
`;

const RoundedImage = styled.img`
  width: 50%;
  border-radius: 100%;
  margin-bottom: 0.5rem;
`;

const ProfileInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  letter-spacing: 1px;
  justify-content: space-between;
`;

const AdditionalInfoWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

const AdditionalInfoTextsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;

  span {
    margin-top: 1rem;
  }
`;

const ProfileTextSecondary = styled(ProfileText)`
  color: ${Colors.lightBlueTextColor};
`;

interface Props {
  user: User;
}

export const ProfileAbout: FC<Props> = observer(({ user }: Props) => {
  const [isEditing, setIsEditing] = useState(false);


  return (
    <Wrapper>
      <ActionsWrapper>
        <ProfileAction iconSrc={"./icons/comments.svg"} message={"Message"} />
        <ProfileAction
          iconSrc={"./icons/entities.svg"}
          message={"Create a request"}
        />
        <ProfileAction
          iconSrc={"./icons/user-plus.svg"}
          message={"Add to cluster"}
        />
        X
      </ActionsWrapper>
      <DetailsWrapper>
        <ImageWrapper>
          <RoundedImage src={user.photo} />
          <ProfileTextSecondary>See Profile</ProfileTextSecondary>
        </ImageWrapper>
        <ProfileInfoWrapper>
          <ProfileTextBold>{user.name}</ProfileTextBold>
          <ProfileTextBold>{user.company.name}</ProfileTextBold>
          <ProfileText>{user.address.city}</ProfileText>
          <ProfileText>{user.company.bs}</ProfileText>
        </ProfileInfoWrapper>
        <AdditionalInfoWrapper>
          <img src="./icons/settings.svg" alt="edit" />
          <AdditionalInfoTextsWrapper>
            <ProfileText>{user.email}</ProfileText>
            <ProfileText>{user.phone}</ProfileText>
          </AdditionalInfoTextsWrapper>
        </AdditionalInfoWrapper>
      </DetailsWrapper>
    </Wrapper>
  );
});
