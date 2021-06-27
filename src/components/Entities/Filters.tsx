import React, { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors";
import {
  SecondaryText,
  SecondaryTextHeader,
} from "../../styledHelpers/textHelpers";
import { Filter } from "./Filter";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${Colors.bordersColor};
  border-radius: 5px;
  position: absolute;
  width: 600px;
  height: 170px;
  top: 5px;
  left: 120px;
  z-index: 999;
  background: ${Colors.primaryColor};
  padding: 0.5rem;
  font-size: 0.8rem;
`;

const Row = styled.div`
  display: flex;
  margin-top: 0.8rem;
`;

const ClickableSecondaryTextHeader = styled(SecondaryTextHeader)`
  cursor: pointer;
  position: relative;
  right: -120px;
`;

const DisabledInput = styled.input`
  width: 50px;
  background: lightgray;
  border: 0;
  outline: 0;
  padding: 0.2rem;
  text-align: center;
  border-radius: 5px;

  ::placeholder {
    color: grey;
    letter-spacing: 1px;
  }
`;

const X = styled.span`
  display: inline-block;
  font-size: 1.2rem;
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
        <ClickableSecondaryTextHeader onClick={closeHandler}>
          X
        </ClickableSecondaryTextHeader>
      </Row>
      <Row>
        <X>x</X>
        <Filter text="Where" displayArrow={false} />
        <Filter text="Company" displayArrow={true} />
        <Filter text="Contains" displayArrow={true} />
        <DisabledInput disabled placeholder="Type" />
      </Row>
      <Row>
        <X>x</X>
        <Filter text="Where" displayArrow={false} />
        <Filter text="Status" displayArrow={true} />
        <Filter text="Is" displayArrow={true} />
        <DisabledInput disabled placeholder="Type" />
        <Filter text="In" displayArrow={true} />
        <DisabledInput disabled placeholder="Entity" />
      </Row>
      <Row>
        <X>x</X>
        <Filter text="Where" displayArrow={false} />
        <Filter text="Status" displayArrow={true} />
        <Filter text="Ends before" displayArrow={true} />
        <DisabledInput disabled placeholder="Date" />
        <Filter text="In" displayArrow={true} />
        <DisabledInput disabled placeholder="Entity" />
      </Row>
      <Row>
        <X>+</X>
        <Filter text="Add filter" displayArrow={false} />
        <Filter text="choose property" displayArrow={true} />
      </Row>
    </Wrapper>
  );
};
