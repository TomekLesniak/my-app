import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors";

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const LinkWrapper = styled.div`
  display: flex;
  margin: 0.5rem 0;
`;

const LinkText = styled(Link)`
  flex-grow: 1;
  margin: 0 1rem;
  color: #7c7a7d;
  font-weight: bold;
  font-size: 1.2rem;
  text-decoration: none;
`;

const Icon = styled.img`
  margin-left: 2rem;
  width: 1.5rem;
`;

export const LeftMenuLinks: FC = () => {
  return (
    <LinksWrapper>
      <LinkWrapper>
        <Icon src="./icons/publications.svg" />
        <LinkText to="/publications">Publications</LinkText>
      </LinkWrapper>
      <LinkWrapper>
        <Icon src="./icons/ecosystem.svg" />
        <LinkText to="/ecosystem">Ecosystem</LinkText>
      </LinkWrapper>
      <LinkWrapper>
        <Icon src="./icons/entities.svg" />
        <LinkText to="/entities">Entities</LinkText>
      </LinkWrapper>
    </LinksWrapper>
  );
};
