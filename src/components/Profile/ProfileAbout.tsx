import { observer } from "mobx-react-lite";
import React, { FC, useState } from "react";
import styled from "styled-components";
import { User } from "../../entities/user";
import { useStore } from "../../reducers/storeContext";
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

const EditIcon = styled.img`
  cursor: pointer;
`;

const MyForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  input {
    display: inline-block;
    margin-top: 0.2rem;
    font-size: 1.2rem;
    letter-spacing: 1px;
    padding: 0.2rem;
    border-radius: 5px;
    border: 1px solid ${Colors.bordersColor};
    color: ${Colors.primaryTextColor};
    font-weight: bold;
  }
`;

interface Props {
  user: User;
}

export const ProfileAbout: FC<Props> = observer(({ user }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const { usersStore } = useStore();

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
        <span>X</span>
      </ActionsWrapper>
      <DetailsWrapper>
        <ImageWrapper>
          <RoundedImage src={user.photo} />
          <ProfileTextSecondary>See Profile</ProfileTextSecondary>
        </ImageWrapper>
        <ProfileInfoWrapper>
          {!isEditing && (
            <>
              <ProfileTextBold>{user.name}</ProfileTextBold>
              <ProfileTextBold>{user.company.name}</ProfileTextBold>
              <ProfileText>{user.address.city}</ProfileText>
              <ProfileText>{user.company.bs}</ProfileText>
            </>
          )}
          {isEditing && (
            <MyForm>
              <input
                defaultValue={user.name}
                onChange={(ev) => usersStore.setUserName(ev.target.value)}
              />
              <input
                defaultValue={user.company.name}
                onChange={(ev) => usersStore.setCompanyName(ev.target.value)}
              />
              <input
                defaultValue={user.address.city}
                onChange={(ev) => usersStore.setAddressCity(ev.target.value)}
              />
              <input
                defaultValue={user.company.bs}
                onChange={(ev) => usersStore.setCompanyBs(ev.target.value)}
              />
            </MyForm>
          )}
        </ProfileInfoWrapper>
        <AdditionalInfoWrapper>
          <EditIcon
            src="./icons/settings.svg"
            alt="edit"
            onClick={() => {
              setIsEditing(!isEditing);
            }}
          />
          <AdditionalInfoTextsWrapper>
            {!isEditing && (
              <>
                <ProfileText>{user.email}</ProfileText>
                <ProfileText>{user.phone}</ProfileText>
              </>
            )}
            {isEditing && (
              <MyForm>
                <input
                  defaultValue={user.email}
                  onChange={(ev) => usersStore.setUserEmail(ev.target.value)}
                />
                <input
                  defaultValue={user.phone}
                  onChange={(ev) => usersStore.setUserPhone(ev.target.value)}
                />
              </MyForm>
            )}
          </AdditionalInfoTextsWrapper>
        </AdditionalInfoWrapper>
      </DetailsWrapper>
    </Wrapper>
  );
});
