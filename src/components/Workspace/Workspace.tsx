import React, { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { useStore } from "../../reducers/storeContext";
import { Instructions } from "./Instructions";
import { LatestUpdates } from "./LatestUpdates";
import { WorkspaceIntro } from "./WorkspaceIntro";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Workspace: FC = () => {
  const location = useLocation<{ title: string; img: string }>();
  const { commonStore } = useStore();

  useEffect(() => {
    commonStore.setCurrentComponentName("Workspace");
  });

  if (!location.state.title)
    return (
      <div>cannot load state from location. Did you typed link directly?</div>
    );

  return (
    <Wrapper>
      <WorkspaceIntro title={location.state?.title} img={location.state.img} />
      <Instructions />
      <LatestUpdates />
    </Wrapper>
  );
};
