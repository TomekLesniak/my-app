import { observer } from "mobx-react-lite";
import React, { FC, useEffect, useState } from "react";
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
  const { usersStore, commonStore } = useStore();
  const user = usersStore.user;

  const [isEditing, setIsEditing] = useState(false);

  const toggleIsEditing = () => {
    setIsEditing(!isEditing);
  };

  const handleKeyPressed = (ev: KeyboardEvent) => {
    const ESC_KEY = "Escape";

    if (ev.key === ESC_KEY) {
      setIsEditing(false);
    }
  };

  useEffect(() => {
    commonStore.setCurrentComponentName("Profile");

    window.addEventListener("keydown", (ev) => handleKeyPressed(ev));

    return () => {
      window.removeEventListener("keydown", (ev) => handleKeyPressed(ev));
    };
  }, [commonStore]);

  if (!user) return <div>No user found</div>; //TODO: error page?

  return (
    <Wrapper>
      <ProfileAbout user={user} />
      <SplitLine />
      <ProfileTags
        isEditing={isEditing}
        setIsEditingCallback={toggleIsEditing}
      />
      <SplitLine />
      <ProfilePanelInformation isEditing={isEditing} user={user} />
      <SplitLine />
      <ProfilePropsals isEditing={isEditing} />
      <SplitLine />
      <ProfileReviews isEditing={isEditing} />
      <SplitLine />
      <ProfileFees isEditing={isEditing} />
    </Wrapper>
  );
});
