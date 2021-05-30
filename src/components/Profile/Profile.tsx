import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import styled from "styled-components";
import { useStore } from "../../reducers/storeContext";
import { boxShadow } from "../../styledHelpers/boxShadow";
import { Colors } from "../../styledHelpers/Colors";
import { ProfileAbout } from "./ProfileAbout";
import { ProfileFees } from "./ProfileFees";
import { ProfilePanelInformation } from "./ProfilePanelInformation";
import { ProfilePropsals } from "./ProfileProposals";
import { ProfileReviews } from "./ProfileReviews";
import { ProfileTags } from "./ProfileTags";

const Wrapper = styled.div`
  min-height: 120vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  border: 1px solid ${Colors.bordersColor};
  border-radius: 5px;
  background-color: ${Colors.primaryColor};
  ${boxShadow};
`;

const SplitLine = styled.div`
  width: 100%;
  box-sizing: content-box;
  position: relative;
  margin: 0.5rem;
  border-bottom: 1px solid ${Colors.bordersColor};
`;

export const Profile: FC = observer(() => {
  const { usersStore } = useStore();
  const user = usersStore.user;

  if (!user) return <div>No user found</div>; //TODO: error page?

  return (
    <Wrapper>
      <ProfileAbout user={user} />
      <SplitLine />
      <ProfileTags />
      <SplitLine />
      <ProfilePanelInformation user={user} />
      <SplitLine />
      <ProfilePropsals />
      <SplitLine />
      <ProfileReviews />
      <SplitLine />
      <ProfileFees />
    </Wrapper>
  );
});
