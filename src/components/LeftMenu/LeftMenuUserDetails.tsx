import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors";

interface Props {
  name: string;
  companyName: string;
  image?: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 50%;
  border-radius: 100%;
`;

const Name = styled.span`
  font-size: 1rem;
  color: ${Colors.primaryTextColor};
  display: inline-block;
  margin: 0.3rem;
  font-weight: 600;
`;

const Details = styled.span`
  display: inline-block;
  margin-top: 5px;
  font-size: 0.8rem;
  color: ${Colors.secondaryTextColor};
  letter-spacing: 1px;
`;

const SplitLine = styled.div`
  width: 100%;
  box-sizing: content-box;
  border: 1px solid ${Colors.backgroundColor};
  padding: 0 1rem;
  margin: 1rem 0;
`;

const DetailsLink = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 0.3rem 0;
`;

const DetailsLinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled.img``;

const DetailsText = styled(Link)`
  color: #154a9e;
  font-weight: 600;
  margin-left: 0.5rem;
  text-decoration: none;
`;

const ImageButton = styled.button`
  border: 1px solid #154a9e;
  border-radius: 5px;
  background-color: ${Colors.primaryColor};
  padding: 0.3rem 0.5rem;
  transition: all 0.3s;
  &:hover {
    background: #7e90ed;
    border: 1px solid white;
  }
`;

export const LeftMenuUserDetails: FC<Props> = ({
  name,
  companyName,
  image,
}: Props) => {
  return (
    <Wrapper>
      <Image src={image ? image : "./icons/logo.png"} alt="" />
      <Name>{name}</Name>
      <Details>Job Title - {companyName}</Details>
      <SplitLine />
      <DetailsLink>
        <DetailsLinkWrapper>
          <Icon src="./icons/people.svg" />
          <DetailsText to="/network">Your network</DetailsText>
        </DetailsLinkWrapper>
        <ImageButton>
          <Icon src="./icons/user-plus.svg" />
        </ImageButton>
      </DetailsLink>
      <DetailsLink>
        <DetailsLinkWrapper>
          <Icon src="./icons/publications.svg" />
          <DetailsText to="/publications">Your publications</DetailsText>
        </DetailsLinkWrapper>
        <ImageButton>
          <Icon src="./icons/plus.svg" />
        </ImageButton>
      </DetailsLink>
    </Wrapper>
  );
};
