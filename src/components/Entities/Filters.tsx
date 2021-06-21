import React, { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors";
import {
  SecondaryText,
  SecondaryTextHeader,
} from "../../styledHelpers/textHelpers";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${Colors.bordersColor};
  border-radius: 5px;
  position: absolute;
  width: 500px;
  height: 100px;
  top: 5px;
  left: 120px;
  z-index: 999;
  background: ${Colors.primaryColor};
  padding: 0.5rem;
  font-size: 0.8rem;
`;

const Row = styled.div`
  display: flex;
`;

interface Props {
  closeHandler: () => void;
}

export const Filters: FC<Props> = ({ closeHandler }: Props) => {
  return (
    <Wrapper>
      <Row>
        <SecondaryText>
          Rows are filtered by the following conditions starting from the top
        </SecondaryText>
        <SecondaryTextHeader onClick={closeHandler}>X</SecondaryTextHeader>
      </Row>
    </Wrapper>
  );
};
