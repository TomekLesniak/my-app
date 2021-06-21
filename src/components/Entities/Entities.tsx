import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { useStore } from "../../reducers/storeContext";
import { Colors } from "../../styledHelpers/Colors";
import {
  PrimaryText,
  PrimaryTextBold,
  PrimaryTextHeader,
  SecondaryTextBold,
  SecondaryTextHeader,
} from "../../styledHelpers/textHelpers";
import { ButtonSize, SearchInput } from "../common/SearchInput";
import { EntityListItem } from "./EntityListItem";
import { Filters } from "./Filters";

const Wrapper = styled.div<WrapperProps>`
  border: 1px solid ${Colors.bordersColor};
  min-height: 75vh;
  background: ${Colors.primaryColor};
  border-radius: 5px;
  padding: 1rem;
  box-sizing: border-box;

  position: ${(props) => (props.isFullScreenMode ? "absolute" : "relative")};
  z-index: ${(props) => (props.isFullScreenMode ? "100" : null)};
  width: ${(props) => (props.isFullScreenMode ? "100vw" : null)};
  height: ${(props) => (props.isFullScreenMode ? "100vh" : null)};
  left: ${(props) => (props.isFullScreenMode ? 0 : null)};
  top: ${(props) => (props.isFullScreenMode ? 0 : null)};
`;

interface WrapperProps {
  isFullScreenMode: boolean;
}

const Icon = styled.img`
  height: 1rem;
  margin-left: 0.5rem;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyleToggleWrapper = styled.div<StyleToggleProps>`
  background-color: ${(props) =>
    props.isActive ? "rgba(29, 51, 128, 0.2)" : null};
  padding: 0.2rem;
  border-radius: 5px;
  position: relative;
  top: -0.4rem;
  margin-left: 0.5rem;
  cursor: pointer;

  span {
    margin-left: 0.5rem;
  }
`;

interface StyleToggleProps {
  isActive: boolean;
}

const Row = styled.div`
  display: flex;
  position: relative;
`;

const FiltersWrapper = styled.div`
  margin-top: 0.2rem;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.button<FollowProps>`
  display: flex;
  justify-content: center;
  align-self: center;
  padding: 0.3rem 1rem;
  margin-left: ${(props) => (props.marginLeft ? "2rem" : null)};
  cursor: pointer;
  width: ${(props) => props.width};
  border-radius: 5px;
  outline: 0;
  border: 2px solid ${Colors.primaryTextColor};

  background-color: ${(props) =>
    props.isActive ? Colors.primaryTextColor : Colors.primaryColor};

  img {
    margin-left: 0.3rem;
    margin-top: 0.3rem;
  }

  span {
    color: ${(props) =>
      props.isActive
        ? Colors.primaryColor
        : Colors.primaryTextColor} !important;
  }
`;

const FilterWrapper = styled.span`
  display: inline-block;
  margin: 0 0.8rem;
  position: relative;
  top: 0.4rem;
  cursor: pointer;
`;

interface FollowProps {
  isActive: boolean;
  width: string;
  marginLeft?: boolean;
}

const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 1rem 0;
  flex-wrap: wrap;
`;

const CancelText = styled.span`
  font-size: 1rem;
  color: ${Colors.primaryTextColor};
  font-weight: bold;
  margin-left: 1rem;
  cursor: pointer;
`;

export const Entities: FC = () => {
  const [isMosaic, setIsMosaic] = useState(true);
  const [isFollowing, setIsFollowing] = useState(false);
  const [fullScreenMode, setFullScreenMode] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const { commonStore } = useStore();

  useEffect(() => {
    commonStore.setCurrentComponentName("Entities");
  }, [commonStore]);

  return (
    <Wrapper isFullScreenMode={fullScreenMode}>
      {showFilters && <Filters closeHandler={() => setShowFilters(false)} />}
      <HeaderWrapper>
        <div>
          <PrimaryTextHeader>Entities</PrimaryTextHeader>
          <Icon src="./icons/settings.svg" />
        </div>
        <Row>
          <StyleToggleWrapper
            isActive={isMosaic}
            onClick={() => setIsMosaic(true)}
          >
            <img src="./icons/people.svg" />
            <PrimaryTextBold>Mosaic</PrimaryTextBold>
          </StyleToggleWrapper>
          <StyleToggleWrapper
            isActive={!isMosaic}
            onClick={() => setIsMosaic(false)}
          >
            <img src="./icons/publications.svg" />
          </StyleToggleWrapper>
          {fullScreenMode && (
            <CancelText onClick={() => setFullScreenMode(false)}>
              LEAVE FULL SCREEN
            </CancelText>
          )}
        </Row>
      </HeaderWrapper>
      <FiltersWrapper>
        <Row>
          <Filter isActive={false} width={"60px"}>
            <PrimaryTextBold>All</PrimaryTextBold>
            <img src="./icons/arrow-down.svg" alt="expand" />
          </Filter>
          <FilterWrapper>
            <PrimaryTextBold>***</PrimaryTextBold>
          </FilterWrapper>
          <FilterWrapper>
            <PrimaryText>&#165; Sort</PrimaryText>
          </FilterWrapper>
          <FilterWrapper onClick={() => setShowFilters(!showFilters)}>
            <PrimaryText>&#8593; Filters</PrimaryText>
          </FilterWrapper>
          <FilterWrapper onClick={() => setFullScreenMode(true)}>
            <PrimaryText>[ &#8599; ]</PrimaryText>
          </FilterWrapper>
          <FilterWrapper>
            <PrimaryText>&#20803; Share</PrimaryText>
          </FilterWrapper>
        </Row>
        <Row>
          <SearchInput size={ButtonSize.small} placeholder={"Search"} />
          <Filter
            width={"150px"}
            isActive={isFollowing}
            marginLeft={true}
            onClick={() => setIsFollowing(!isFollowing)}
          >
            <PrimaryTextBold>Following</PrimaryTextBold>
            <img src="./icons/arrow-down.svg" alt="expand" />
          </Filter>
        </Row>
      </FiltersWrapper>
      <div>
        <Ul>
          <EntityListItem
            header="test"
            description="test"
            displayType={isMosaic ? "inline-block" : "block"}
          />
          <EntityListItem
            header="test"
            description="test"
            displayType={isMosaic ? "inline-block" : "block"}
          />
          <EntityListItem
            header="test"
            description="test"
            displayType={isMosaic ? "inline-block" : "block"}
          />
          <EntityListItem
            header="test"
            description="test"
            displayType={isMosaic ? "inline-block" : "block"}
          />
          <EntityListItem
            header="test"
            description="test"
            displayType={isMosaic ? "inline-block" : "block"}
          />
          <EntityListItem
            header="test"
            description="test"
            displayType={isMosaic ? "inline-block" : "block"}
          />
          <EntityListItem
            header="test"
            description="test"
            displayType={isMosaic ? "inline-block" : "block"}
          />
          <EntityListItem
            header="test"
            description="test"
            displayType={isMosaic ? "inline-block" : "block"}
          />
          <EntityListItem
            header="test"
            description="test"
            displayType={isMosaic ? "inline-block" : "block"}
          />
          <EntityListItem
            header="test"
            description="test"
            displayType={isMosaic ? "inline-block" : "block"}
          />
          <EntityListItem
            header="test"
            description="test"
            displayType={isMosaic ? "inline-block" : "block"}
          />
          <EntityListItem
            header="test"
            description="test"
            displayType={isMosaic ? "inline-block" : "block"}
          />
          <EntityListItem
            header="test"
            description="test"
            displayType={isMosaic ? "inline-block" : "block"}
          />
          <EntityListItem
            header="test"
            description="test"
            displayType={isMosaic ? "inline-block" : "block"}
          />
          <EntityListItem
            header="test"
            description=""
            displayType={isMosaic ? "inline-block" : "block"}
          />
        </Ul>
      </div>
    </Wrapper>
  );
};
