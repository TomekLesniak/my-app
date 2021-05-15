import React, { FC } from "react";
import styled from "styled-components";
import { boxShadow } from "../../styledHelpers/boxShadow";
import { Colors } from "../../styledHelpers/Colors";
import { LeftMenuLinks } from "./LeftMenuLinks";
import { LeftMenuUserDetails } from "./LeftMenuUserDetails";

const LeftMenuUsersWrapper = styled.div`
  box-sizing: border-box;
  padding: 1rem;
  width: 20vw;
  min-height: 30vh;
  background: ${Colors.primaryColor};
  ${boxShadow};
  border-radius: 5px;
  margin-bottom: 1rem;
`;

const LeftMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LeftMenu: FC = () => {
  return (
    <LeftMenuWrapper>
      <LeftMenuUsersWrapper>
        <LeftMenuUserDetails
          name={"Tomasz Lesniak"}
          companyName={"ABB"}
          image={"https://via.placeholder.com/600/24f355"}
        />
      </LeftMenuUsersWrapper>
      <LeftMenuLinks />
    </LeftMenuWrapper>
  );
};
