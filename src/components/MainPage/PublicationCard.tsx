import React, { FC } from "react";
import styled from "styled-components";
import {
  PrimaryText,
  PrimaryTextBold,
  SecondaryText,
} from "../../styledHelpers/textHelpers";
import { PublicationUser } from "./Slider";

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 0.4rem;
`;

const PublicationImage = styled.img`
  width: 70px;
  height: 70px;
`;

const PublicationDetails = styled.div`
  padding: 0 0.5rem 0.5rem 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1rem;
  margin-left: 0;
`;

const PublicationAdditionalinfo = styled.div`
  display: flex;
  font-size: 0.9rem;
`;

export const PublicationCard: FC = () => {
  return (
    <Wrapper>
      <PublicationImage src={"./city.jpg"} />
      <PublicationDetails>
        <PrimaryTextBold>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium,
          sapiente.
        </PrimaryTextBold>
        <PublicationAdditionalinfo>
          <SecondaryText>7 Jan, 2020</SecondaryText>
          <PublicationUser>
            <img src={"./city.jpg"} />
            <SecondaryText>User Name</SecondaryText>
          </PublicationUser>
        </PublicationAdditionalinfo>
      </PublicationDetails>
    </Wrapper>
  );
};
