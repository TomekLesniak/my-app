import React, { FC } from "react";
import styled from "styled-components";
import { boxShadow } from "../../styledHelpers/boxShadow";
import { Colors } from "../../styledHelpers/Colors";
import { PrimaryText, SecondaryText } from "../../styledHelpers/textHelpers";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 275px;
  height: 250px;
  align-items: stretch;
  border: 1px solid ${Colors.bordersColor};
  border-radius: 5px;
  background-color: ${Colors.primaryColor};
  ${boxShadow};
`;

const ImageWrapper = styled.div`
  height: 50%;
  width: 100%;
  overflow: hidden;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 5px;
`;

const TypeWrapper = styled.div`
  display: flex;

  span {
    margin-top: 0.5rem;
  }
`;

const MovedUp = styled.div`
  position: relative;
  top: -30px;
  left: 10px;
`;

const IconWrapper = styled(MovedUp)`
  background-color: ${Colors.primaryColor};
  ${boxShadow};
  border: 1px solid ${Colors.bordersColor};
  padding: 1.5rem;
  border-radius: 5px;
`;

const DetailsWrapper = styled(MovedUp)`
  display: flex;
  margin-top: 0.5rem;
  justify-content: space-between;
  align-items: center;
`;

const Detail = styled.div`
  img {
    width: 1rem;
  }
  span {
    font-size: 1rem;
    margin-left: 0.5rem;
  }
`;

const Time = styled(MovedUp)`
  margin-top: 1rem;
  font-size: 0.8rem;
`;

export const WorkspaceItem: FC = () => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={"./clientcontract.jpg"} />
      </ImageWrapper>
      <TypeWrapper>
        <IconWrapper>
          <img src={"./icons/entities.svg"} alt="workspace type" />
        </IconWrapper>
        <PrimaryText>Supplier contract</PrimaryText>
      </TypeWrapper>
      <DetailsWrapper>
        <Detail>
          <img src={"./icons/entities.svg"} alt="workspace type" />
          <SecondaryText>Contract</SecondaryText>
        </Detail>
        <Detail>
          <img src={"./icons/people.svg"} alt="users" />
          <SecondaryText>150 users</SecondaryText>
        </Detail>
      </DetailsWrapper>
      <Time>
        <SecondaryText>Last updated 2 days ago</SecondaryText>
      </Time>
    </Wrapper>
  );
};
