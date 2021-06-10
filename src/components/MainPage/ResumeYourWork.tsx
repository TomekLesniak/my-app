import React, { FC } from "react";
import styled from "styled-components";
import { useStore } from "../../reducers/storeContext";
import { boxShadow } from "../../styledHelpers/boxShadow";
import { Colors } from "../../styledHelpers/Colors";
import {
  PrimaryTextBold,
  PrimaryTextHeader,
  SecondaryText,
  SecondaryTextHeader,
} from "../../styledHelpers/textHelpers";
import { SearchInput, ButtonSize } from "../common/SearchInput";
import { ResumeYourWorkCard } from "./ResumeYourWorkCard";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  ${boxShadow};
`;

const HeadWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.2rem 0;
`;

const FiltersWrapper = styled.div`
  display: flex;
`;

const Filter = styled.div`
  display: flex;
  align-self: center;
  margin: 0 2rem;
  cursor: pointer;

  img {
    margin: 0 0.3rem;
  }
`;

export const ResumeYourWork: FC = () => {
  const { usersStore } = useStore();
  const user = usersStore.user;

  if (!user) return <div>error</div>;

  return (
    <Wrapper>
      <HeadWrapper>
        <SecondaryTextHeader>Resume your work</SecondaryTextHeader>
        <FiltersWrapper>
          <SearchInput
            size={ButtonSize.small}
            placeholder={"Filter by title..."}
          />
          <Filter>
            <PrimaryTextBold>Following</PrimaryTextBold>
            <img src="./icons/arrow-down.svg" />
          </Filter>
        </FiltersWrapper>
      </HeadWrapper>
      <ResumeYourWorkCard user={user} />
      <ResumeYourWorkCard user={user} />
    </Wrapper>
  );
};
