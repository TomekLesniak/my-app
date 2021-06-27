import { observer } from "mobx-react-lite";
import React, { FC, useState } from "react";
import styled from "styled-components";
import { User } from "../../entities/user";
import { Colors } from "../../styledHelpers/Colors";
import {
  ProfileGrayedTextHeader,
  ProfileText,
  ProfileTextBold,
  ProfileTextBoldHeader,
} from "../../styledHelpers/profileHelpers";
import { ProfileAction } from "./ProfileAction";
import { ProfileInput } from "./ProfileInput";

const Wrapper = styled.div`
  letter-spacing: 1px;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  margin: 0.5rem 0;
  display: flex;
  flex-direction: column;
`;

const AttachementWrapper = styled.div`
  display: flex;
  background: ${Colors.backgroundColor};
  padding: 0.5rem;
  margin: 0.2rem 0;
  color: ${Colors.primaryTextColor};

  a {
    margin: 0 1rem;
    text-decoration: none;
  }
`;

const CorrespondantImage = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  z-index: 100;
`;

const CorrespondantWrapper = styled(AttachementWrapper)`
  justify-content: space-around;
  align-items: center;
  span {
    flex-grow: 2;
    margin-left: 1rem;
  }
  div {
    flex-grow: 1;
  }
`;

interface Props {
  user: User;
  isEditing: boolean;
}

export const ProfilePanelInformation: FC<Props> = observer(
  ({ user, isEditing }: Props) => {
    const [hourlyFee, setHourlyFee] = useState("610$/hour (Negociated)");
    const [terms, setTerms] = useState(
      "Monthly 10k$ retainer - see with Jeanny Smith"
    );
    const [services, setServices] = useState(
      " Corporate M&A and international acquisitions"
    );
    return (
      <Wrapper>
        <Row>
          <ProfileTextBold>Panel Informations</ProfileTextBold>
        </Row>

        <Row>
          <ProfileGrayedTextHeader>Hourly Fee</ProfileGrayedTextHeader>
          <ProfileText>
            {!isEditing && hourlyFee}
            {isEditing && (
              <ProfileInput
                initValue={hourlyFee}
                callback={(ev) => setHourlyFee(ev.target.value)}
              />
            )}
          </ProfileText>
        </Row>

        <Row>
          <ProfileGrayedTextHeader>Terms & conditions</ProfileGrayedTextHeader>
          <ProfileText>
            {!isEditing && terms}
            {isEditing && (
              <ProfileInput
                initValue={terms}
                callback={(ev) => setTerms(ev.target.value)}
              />
            )}
          </ProfileText>
          <AttachementWrapper>
            <img src="./icons/logout.svg" alt="Attachement" />
            <a href="#dummy">Attachment-lorem-ipsum-25425.jpg</a>
          </AttachementWrapper>
        </Row>

        <Row>
          <ProfileTextBoldHeader>Services & projects</ProfileTextBoldHeader>
          <ProfileText>
            {!isEditing && services}
            {isEditing && (
              <ProfileInput
                initValue={services}
                callback={(ev) => setServices(ev.target.value)}
              />
            )}
          </ProfileText>
        </Row>

        <Row>
          <ProfileTextBoldHeader>Internal correspondants</ProfileTextBoldHeader>
          <CorrespondantWrapper>
            <CorrespondantImage src={user.photo} />
            <span>Firstname Lastname</span>
            <ProfileAction
              iconSrc={"./icons/comments.svg"}
              message={"Message"}
            />
            <ProfileAction iconSrc={"./icons/people.svg"} message={"Profile"} />
          </CorrespondantWrapper>
          <CorrespondantWrapper>
            <CorrespondantImage src={user.photo} />
            <span>Firstname Lastname</span>
            <ProfileAction
              iconSrc={"./icons/comments.svg"}
              message={"Message"}
            />
            <ProfileAction iconSrc={"./icons/people.svg"} message={"Profile"} />
          </CorrespondantWrapper>
        </Row>
      </Wrapper>
    );
  }
);
