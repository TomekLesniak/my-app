import React, { FC, useState } from "react";
import { ChangeEvent } from "react";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors";

const Wrapper = styled.div`
  position: absolute;
  top: 2rem;
  left: 0;
  padding: 0.3rem 0.5rem;
  height: 400px;
  width: 200px;
  border: 1px solid ${Colors.secondaryTextColor};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  background: ${Colors.primaryColor};
`;

const FilterInput = styled.input`
  display: inline-block;
  border: 0px;
  border-radius: 5px;
  padding: 0.5rem;

  ::placeholder {
    color: ${Colors.secondaryTextColor};
  }
`;

const GroupText = styled.span`
  display: inline-block;
  color: ${Colors.secondaryTextColor};
  font-size: 0.8rem;
  margin: 0.3rem 0;
`;

const GroupLink = styled.div`
  display: flex;
  margin: 0.3rem;
`;

const LinkIcon = styled.img`
  height: 1.5rem;
  width: 1.5rem;
`;

const LinkText = styled.span`
  color: ${Colors.primaryTextColor};
  display: inline-block;
  margin-top: 0.3rem;
  margin-left: 0.5rem;
`;

const LinksWrapper = styled.div`
  height: 70%;
  overflow-y: scroll;
`;

const AccountSettings = styled.div`
  display: flex;
  flex-direction: column;
`;

const AccountDetailsWrapper = styled.div`
  display: flex;
`;

const AccountSeeDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SplitLine = styled.div`
  width: 100%;
  box-sizing: content-box;
  border-bottom: 1px solid ${Colors.backgroundColor};
  padding: 0.1rem 0.3rem;
  margin: 0 1rem;
  margin-left: -0.3rem;
`;

const AccountRoundedImage = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`;

const LogoutWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

interface Props {
  name: string;
  image?: string;
}

export const ExpandedMenu: FC<Props> = ({ image, name }: Props) => {
  const [inputText, setInputText] = useState<string>("");

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputText(text);
  };

  return (
    <Wrapper>
      <FilterInput
        placeholder={"Filter..."}
        value={inputText}
        onChange={inputHandler}
      />
      <SplitLine />
      <LinksWrapper>
        <GroupText>Platform</GroupText>
        {"home".includes(inputText.toLowerCase()) && (
          <GroupLink>
            <LinkIcon src="./icons/house.svg" />
            <LinkText>Home</LinkText>
          </GroupLink>
        )}

        {"publications".includes(inputText.toLowerCase()) && (
          <GroupLink>
            <LinkIcon src="./icons/publications.svg" />
            <LinkText>Publications</LinkText>
          </GroupLink>
        )}

        {"people".includes(inputText.toLowerCase()) && (
          <GroupLink>
            <LinkIcon src="./icons/people.svg" />
            <LinkText>People</LinkText>
          </GroupLink>
        )}

        {"entities".includes(inputText.toLowerCase()) && (
          <GroupLink>
            <LinkIcon src="./icons/entities.svg" />
            <LinkText>Entities</LinkText>
          </GroupLink>
        )}

        {"administration".includes(inputText.toLowerCase()) && (
          <GroupLink>
            <LinkIcon src="./icons/administration.svg" />
            <LinkText>Administration</LinkText>
          </GroupLink>
        )}
        <GroupText>Workspaces</GroupText>

        {"client contract".includes(inputText.toLowerCase()) && (
          <GroupLink>
            <LinkIcon src="./icons/comments.svg" />
            <LinkText>Client contract</LinkText>
          </GroupLink>
        )}

        {"supplier contract".includes(inputText.toLowerCase()) && (
          <GroupLink>
            <LinkIcon src="./icons/comments.svg" />
            <LinkText>Supplier contract</LinkText>
          </GroupLink>
        )}

        {"corporate".includes(inputText.toLowerCase()) && (
          <GroupLink>
            <LinkIcon src="./icons/entities.svg" />
            <LinkText>Corporate</LinkText>
          </GroupLink>
        )}

        {"group norms".includes(inputText.toLowerCase()) && (
          <GroupLink>
            <LinkIcon src="./icons/entities.svg" />
            <LinkText>Group Norms</LinkText>
          </GroupLink>
        )}

        {"real estate contracts".includes(inputText.toLowerCase()) && (
          <GroupLink>
            <LinkIcon src="./icons/comments.svg" />
            <LinkText>Real estate contracts</LinkText>
          </GroupLink>
        )}
      </LinksWrapper>
      <SplitLine />
      <AccountSettings>
        <GroupText>Account</GroupText>
        <AccountDetailsWrapper>
          <AccountRoundedImage src={image ? image : "./icons/people.svg"} />
          <AccountSeeDetailsWrapper>
            <p>{name}</p>
            <p>See profile</p>
          </AccountSeeDetailsWrapper>
        </AccountDetailsWrapper>
        <GroupLink>
          <LinkIcon src="./icons/privacy.svg" />
          <LinkText>Privacy</LinkText>
        </GroupLink>
        <GroupLink>
          <LinkIcon src="./icons/settings.svg" />
          <LinkText>Settings</LinkText>
        </GroupLink>
      </AccountSettings>
      <SplitLine />
      <LogoutWrapper>
        <LinkIcon src="./icons/logout.svg" />
        <LinkText>Logout</LinkText>
      </LogoutWrapper>
    </Wrapper>
  );
};
