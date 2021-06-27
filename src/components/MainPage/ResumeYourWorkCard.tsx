import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { boxShadow } from "../../styledHelpers/boxShadow";
import { Colors } from "../../styledHelpers/Colors";
import {
  PrimaryTextBold,
  SecondaryText,
  SecondaryTextBold,
} from "../../styledHelpers/textHelpers";
import { UserComment } from "./ResumeYourWork";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  border: 1px solid ${Colors.bordersColor};
  background-color: ${Colors.primaryColor};
  border-radius: 5px;
  ${boxShadow};
  margin: 0.2rem;

  span {
    margin: 0.3rem 0;
  }
`;

const DetailsWrapper = styled.div`
  display: flex;
  font-size: 0.7em;
  margin: 0.2rem;

  div {
    margin-right: 0 2rem;
  }
`;

const Dot = styled.span`
  margin: 0 1rem !important;
  margin-top: 0.2rem !important;
`;

const DetailWrapper = styled.div`
  display: flex;

  * {
    margin: 0 0.3rem;
  }

  span {
    margin-top: 0.5rem;
    padding: 0.1rem;
  }
`;

interface Props {
  userComment: UserComment;
}

export const ResumeYourWorkCard: FC<Props> = ({ userComment }: Props) => {
  const categoryId: number = userComment?.userId % 3;
  const [category, setCategory] = useState("");

  useEffect(() => {
    switch (categoryId) {
      case 0:
        setCategory("Corporate");
        break;
      case 1:
        setCategory("Supplier contract");
        break;
      case 2:
        setCategory("Client Contract");
        break;
    }
  }, [category, categoryId]);

  return (
    <Wrapper>
      <PrimaryTextBold>{userComment.title}</PrimaryTextBold>
      <SecondaryText>{userComment.body}</SecondaryText>
      <DetailsWrapper>
        <DetailWrapper>
          <img src="./icons/house.svg" alt="house" />
          <SecondaryTextBold>Subsid. corp.</SecondaryTextBold>
        </DetailWrapper>
        <Dot>.</Dot>
        <DetailWrapper>
          <img src="./icons/entities.svg" alt="entities" />
          <SecondaryTextBold>{category}</SecondaryTextBold>
        </DetailWrapper>
        <Dot>.</Dot>
        <DetailWrapper>
          <SecondaryText>
            Updated 3 days ago by {userComment.userName}
          </SecondaryText>
        </DetailWrapper>
      </DetailsWrapper>
    </Wrapper>
  );
};
