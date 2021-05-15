import React, { FC } from "react";
import useDropdown from "react-dropdown-hook";
import styled from "styled-components";
import { boxShadow } from "../../styledHelpers/boxShadow";
import { sizes } from "../../styledHelpers/breakpoints";
import { Colors } from "../../styledHelpers/Colors";
import { fontSize } from "../../styledHelpers/FontSizes";
import { ExpandedMenu } from "../ExpandedMenu/ExpandedMenu";

const TopBarWrapper = styled.div`
  height: 3rem;
  margin: 0;
  display: flex;
  background: ${Colors.primaryColor};
  align-items: center;
  justify-content: space-between;
  ${boxShadow};
`;

const Menu = styled.div`
  display: flex;
  width: 30%;
  margin-left: 1rem;
  position: relative;
`;

const MenuExpanding = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-left: 1rem;
  margin-top: 5px;
`;

const MenuText = styled.span`
  display: inline-block;
  font-weight: bold;
`;

const MenuImage = styled.img`
  width: 0.7rem;
  height: 1rem;
`;

const Logo = styled.img`
  height: 40px;
  width: 40px;
`;

const Search = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid grey;
  padding: 0.3rem;
  border-radius: 10px;
  width: 100%;
  margin: 0 10rem;
`;

const SearchInput = styled.input`
  border: 0;
  outline: 0;
  flex-grow: 1;
  padding: 0 3rem;
  background: ${Colors.primaryColor};

  ::placeholder {
    color: grey;
    text-align: center;
  }
`;

const Icons = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-evenly;
`;

const Icon = styled.img``;

const TopBar: FC = () => {
  const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();

  return (
    <TopBarWrapper>
      <Logo src="./icons/logo.png" />
      <Menu ref={wrapperRef}>
        <img src="./icons/house.svg" alt="House" />
        <MenuExpanding onClick={toggleDropdown}>
          <MenuText>Home</MenuText>
          <MenuImage src="./icons/arrow-down.svg" alt="Arrow down" />
        </MenuExpanding>
        {dropdownOpen && <ExpandedMenu name={"Tomasz Lesniak"} />}
      </Menu>
      <Search>
        <SearchInput type="text" placeholder="Search LegalCluster" />
        <img src="./icons/search.svg" alt="Loop" />
      </Search>
      <Icons>
        <Icon src="./icons/house.svg" />
        <Icon src="./icons/comments.svg" />
        <Icon src="./icons/bell.svg" />
      </Icons>
    </TopBarWrapper>
  );
};

export default TopBar;
