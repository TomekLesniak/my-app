import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";

import TopBar from "../TopBar/TopBar";
import { LeftMenu } from "../LeftMenu/LeftMenu";
import { Colors } from "../../styledHelpers/Colors";
import { Route, Switch, useLocation } from "react-router-dom";
import { Slider } from "./Slider";
import { Workspaces } from "./Workspaces";
import { ResumeYourWork } from "./ResumeYourWork";
import { useStore } from "../../reducers/storeContext";
import { observer } from "mobx-react-lite";
import { Profile } from "../Profile/Profile";
import { CommonStore } from "../../reducers/commonStore";
import { ErrorPage } from "./ErrorPage";
import { Entities } from "../Entities/Entities";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  font-size: 1.2rem;
  background: ${Colors.backgroundColor};
`;

const InnerWrapper = styled.div`
  box-sizing: border-box;
  margin: 1rem;
  display: flex;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 2rem;
  overflow: hidden;
  width: 100%;
`;

const ContentWrapper = styled.div`
  margin-bottom: 2rem;
  width: 100%;
`;

const MainPage: FC = observer(() => {
  const { usersStore, commonStore } = useStore();

  useEffect(() => {
    usersStore.loadUser(1);
  }, [usersStore]);

  if (!usersStore.user) {
    return <div>Loading</div>;
  }

  return (
    <Wrapper>
      <TopBar />
      <InnerWrapper>
        <LeftMenu />
        <Content>
          <Switch>
            <Route path="/publications" exact>
              Publications Component
            </Route>
            <Route path="/ecosystem" exact>
              ecosystem Component
            </Route>
            <Route path="/entities" exact>
              <Entities />
            </Route>
            <Route path="/profile" exact>
              <Profile />
            </Route>
            <Route path="/" exact>
              <ContentWrapper>
                <Slider />
              </ContentWrapper>
              <ContentWrapper>
                <Workspaces />
              </ContentWrapper>
              <ContentWrapper>
                <ResumeYourWork />
              </ContentWrapper>
            </Route>
            <Route path="/">
              <ContentWrapper>
                <ErrorPage />
              </ContentWrapper>
            </Route>
          </Switch>
        </Content>
      </InnerWrapper>
    </Wrapper>
  );
});

export default MainPage;
