import React, { FC } from "react";
import styled from "styled-components";
import { boxShadow } from "../../styledHelpers/boxShadow";
import { Colors } from "../../styledHelpers/Colors";
import {
  PrimaryTextBold,
  SecondaryText,
} from "../../styledHelpers/textHelpers";

const ListItemWrapper = styled.li<LiProps>`
  display: ${(props) => props.displayType};
  width: ${(props) => (props.displayType === "block" ? "100%" : "32%")};
  border: 1px solid ${Colors.bordersColor};
  border-radius: 5px;
  ${boxShadow};
  height: 120px;
  margin: 0.5rem 0;
`;

const ImageWrapper = styled.div`
  flex-grow: 1;
  height: 100%;
  width: 30%;
  img {
    width: 100%;
    height: 120px;
  }
`;

const InfoWrapper = styled.div`
  padding: 0.5rem;
  display: flex;
  word-break: word-break;
  height: 120px;
  box-sizing: border-box;
  flex-direction: column;
  text-overflow: ellipsis;
  overflow: hidden;
  flex-grow: 1;
  width: 50%;
  justify-content: space-between;
`;

interface LiProps {
  displayType: string;
}

const Row = styled.div`
  display: flex;
`;

const SecondaryTextSmall = styled(SecondaryText)`
  font-size: 0.8rem;
`;

interface Props {
  displayType: string;
  header: string;
  image: string;
}

export const EntityListItem: FC<Props> = ({
  displayType,
  header,
  image,
}: Props) => {
  return (
    <ListItemWrapper displayType={displayType}>
      <Row>
        <ImageWrapper>
          <img src={image} alt="entity" />
        </ImageWrapper>
        <InfoWrapper>
          <PrimaryTextBold>{header}</PrimaryTextBold>
          <SecondaryTextSmall>
            Caracas 1050, Distrito Capital, Venezuela
          </SecondaryTextSmall>
        </InfoWrapper>
      </Row>
    </ListItemWrapper>
  );
};
