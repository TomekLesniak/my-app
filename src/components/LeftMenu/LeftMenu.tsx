import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import styled from "styled-components";
import { useStore } from "../../reducers/storeContext";
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

export const LeftMenu: FC = observer(() => {
  const { usersStore } = useStore();
  const loggedUser = usersStore.user;

  return (
    <LeftMenuWrapper>
      <LeftMenuUsersWrapper>
        <LeftMenuUserDetails
          name={loggedUser!.name}
          companyName={loggedUser!.company.name}
          image={loggedUser!.photo}
        />
      </LeftMenuUsersWrapper>
      <LeftMenuLinks />
    </LeftMenuWrapper>
  );
});
