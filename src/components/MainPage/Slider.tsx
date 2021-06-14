import React, { FC, useEffect } from "react";
import styled from "styled-components";
import { useStore } from "../../reducers/storeContext";
import { boxShadow } from "../../styledHelpers/boxShadow";
import { Colors } from "../../styledHelpers/Colors";
import {
  PrimaryText,
  PrimaryTextHeader,
} from "../../styledHelpers/textHelpers";
import { PublicationCard } from "./PublicationCard";

const Wrapper = styled.div`
  height: 330px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 10px;
  border: 1px solid ${Colors.bordersColor};
  overflow: hidden;
  align-items: center;
  border-radius: 5px;
  background-color: ${Colors.primaryColor};
  ${boxShadow};
`;

const MainPublicationWrapper = styled.div`
  display: flex;
  height: 100%;
  background: url(./city.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
`;

const MainPublication = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${Colors.primaryColor};
  justify-content: center;
  align-items: flex-end;
  position: relative;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    opacity: 0.7;
  }
`;

const MainPublicationDetails = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  font-size: 1rem;
  letter-spacing: 1px;
  color: ${Colors.primaryColor};
`;

const MainPublicationsDetailsHeader = styled.span`
  display: inline-block;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const MainPublicationInfo = styled.div`
  display: flex;
  font-size: 0.9rem;
`;

const PublicationDate = styled.span`
  color: ${Colors.backgroundColor};
`;

export const PublicationUser = styled.div`
  margin: 0 0.5rem;
  display: flex;
  color: ${Colors.primaryTextColor};

  img {
    width: 15px;
    height: 15px;
    border-radius: 100%;
    margin-right: 0.2rem;
  }
`;

const MainPublicationUserText = styled.span`
  color: ${Colors.backgroundColor};
  margin: 0 0.1rem;
`;

const Publications = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Slider: FC = () => {
  const { commonStore } = useStore();

  useEffect(() => {
    commonStore.setCurrentComponentName("Home");
  }, [commonStore]);

  return (
    <Wrapper>
      <MainPublicationWrapper>
        <MainPublication>
          <img src={"./city.jpg"} alt="City" />
          <MainPublicationDetails>
            <MainPublicationsDetailsHeader>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet.
            </MainPublicationsDetailsHeader>
            <MainPublicationInfo>
              <PublicationDate>7 Jan, 2020</PublicationDate>
              <PublicationUser>
                <img src={"./city.jpg"} alt="City" />
                <MainPublicationUserText>User Name</MainPublicationUserText>
              </PublicationUser>
            </MainPublicationInfo>
          </MainPublicationDetails>
        </MainPublication>
      </MainPublicationWrapper>
      <Publications>
        <PrimaryTextHeader>Latest publications</PrimaryTextHeader>
        <PublicationCard />
        <PublicationCard />
        <PublicationCard />
        <PrimaryTextHeader>See more publications</PrimaryTextHeader>
      </Publications>
    </Wrapper>
  );
};
