import React, { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors";
import { SecondaryTextHeader } from "../../styledHelpers/textHelpers";
import { WorkspaceItem } from "./WorkspaceItem";

const Wrapper = styled.div`
  min-height: 25vh;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  align-items: center;
  justify-content: end;

  div {
    flex: 0 0 auto;
    margin-right: 1rem;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

const HeadWrapper = styled.div`
  padding: 0.5rem 0;
`;

export const Workspaces: FC = () => {
  return (
    <>
      <HeadWrapper>
        <SecondaryTextHeader>Workspaces</SecondaryTextHeader>
      </HeadWrapper>
      <Wrapper>
        <WorkspaceItem />
        <WorkspaceItem />
        <WorkspaceItem />
        <WorkspaceItem />
        <WorkspaceItem />
      </Wrapper>
    </>
  );
};
