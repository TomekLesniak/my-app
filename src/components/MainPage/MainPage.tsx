import React, { FC } from "react";
import styled from "styled-components";

import TopBar from "../TopBar/TopBar";
import { LeftMenu } from "../LeftMenu/LeftMenu";
import { Colors } from "../../styledHelpers/Colors";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
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
`;

const MainPage: FC = () => {
  return (
    <Wrapper>
      <TopBar />
      <InnerWrapper>
        <LeftMenu />
        <Content>
          <h1>test</h1>
          <h2>test</h2>
        </Content>
      </InnerWrapper>
    </Wrapper>
  );
};

export default MainPage;
