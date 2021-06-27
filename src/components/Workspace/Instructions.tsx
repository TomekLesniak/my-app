import React, { FC } from "react";
import styled from "styled-components";
import { boxShadow } from "../../styledHelpers/boxShadow";
import { Colors } from "../../styledHelpers/Colors";
import { PrimaryText, PrimaryTextBold } from "../../styledHelpers/textHelpers";

const InstructionsWrapper = styled.div`
  box-sizing: border-box;
  height: 250px;
  background-color: ${Colors.bordersColor};
  padding: 1rem;
  align-items: center;
  display: flex;
  border-radius: 5px;
  flex-direction: column;
  ${boxShadow};
  margin-bottom: 1rem;
`;

const InstructionsTitleWrapper = styled.div`
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  display: flex;
  color: ${Colors.primaryTextColor};
`;

const InstructionsItemsWrapper = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  display: flex;
`;

const InstructionsItem = styled.div`
  box-sizing: border-box;
  width: 300px;
  height: 100%;
  background-color: white;
  padding: 10px;
  border: 1px solid ${Colors.bordersColor};
  display: flex;
  flex-direction: column;
  border-radius: 5px;
`;

const InstructionsIcon = styled.img`
  width: 50px;
  height: 50px;
`;

const InstructionsItemTitle = styled(PrimaryTextBold)`
  font-weight: bold;
  font-size: 1rem;
  margin: 10px 0;
`;

const InstructionsItemDescription = styled(PrimaryText)``;

export const Instructions: FC = () => {
  return (
    <InstructionsWrapper>
      <InstructionsTitleWrapper>
        <span>Start working on corporate matters</span>
        <span>Hide</span>
      </InstructionsTitleWrapper>
      <InstructionsItemsWrapper>
        <InstructionsItem>
          <InstructionsIcon src="./icons/entities.svg" />
          <InstructionsItemTitle>Explore your entities</InstructionsItemTitle>
          <InstructionsItemDescription>
            Take a few minutes to look at the most important elelemnts and
            specificites of your entitites
          </InstructionsItemDescription>
        </InstructionsItem>

        <InstructionsItem>
          <InstructionsIcon src="./icons/network.svg" />
          <InstructionsItemTitle>Structure the ownership</InstructionsItemTitle>
          <InstructionsItemDescription>
            Get a clear view of the ownership by looking at the letations
            between individuals and entities
          </InstructionsItemDescription>
        </InstructionsItem>

        <InstructionsItem>
          <InstructionsIcon src="./icons/people.svg" />
          <InstructionsItemTitle>Define the calendar</InstructionsItemTitle>
          <InstructionsItemDescription>
            Prepare future events by creating detailed plans around the life of
            your entity
          </InstructionsItemDescription>
        </InstructionsItem>
      </InstructionsItemsWrapper>
    </InstructionsWrapper>
  );
};
