import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import styled from "styled-components";
import { useStore } from "../../reducers/storeContext";
import { boxShadow } from "../../styledHelpers/boxShadow";
import { Colors } from "../../styledHelpers/Colors";
import {
  PrimaryTextBold,
  SecondaryText,
} from "../../styledHelpers/textHelpers";

const Wrapper = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  height: 250px;
  align-items: stretch;
  border: 1px solid ${Colors.bordersColor};
  border-radius: 5px;
  background-color: ${Colors.primaryColor};
  ${boxShadow};
`;

const ImageWrapper = styled.div`
  height: 50%;
  width: 100%;
  overflow: hidden;
  flex-grow: 1;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 5px;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  margin: 0 1rem;
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 1rem;
  justify-content: space-between;
`;

const Icon = styled.img`
  height: 2rem;
  display: inline-block;
  justify-content: center;
  align-self: center;
`;

interface Props {
  title: string;
  img: string;
}

export const WorkspaceIntro: FC<Props> = observer(({ img, title }: Props) => {
  const { photosStore } = useStore();
  const photos = photosStore.photos;
  if (!photos) return <div>Loading</div>;
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={photos[0].url} />
      </ImageWrapper>
      <Row>
        <Icon src={img} />
        <DetailsWrapper>
          <PrimaryTextBold>{title}</PrimaryTextBold>
          <SecondaryText>
            Workspace purpose and a bit of context. This much needed description
            is here to remind people where they are. If they are new or have
            poor memory
          </SecondaryText>
        </DetailsWrapper>
      </Row>
    </Wrapper>
  );
});
