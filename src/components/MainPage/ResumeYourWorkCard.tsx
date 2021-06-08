import React, { FC } from "react";
import styled from "styled-components";
import { boxShadow } from "../../styledHelpers/boxShadow";
import { Colors } from "../../styledHelpers/Colors";
import {
  PrimaryTextBold,
  SecondaryText,
} from "../../styledHelpers/textHelpers";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  border: 1px solid ${Colors.bordersColor};
  background-color: ${Colors.primaryColor};
  border-radius: 5px;
  ${boxShadow};
  margin: 0.2rem;

  span {
    margin: 0.1rem 0;
  }
`;

interface Props {}

export const ResumeYourWorkCard: FC<Props> = () => {
  return (
    <Wrapper>
      <PrimaryTextBold>World Company SAS</PrimaryTextBold>
      <SecondaryText>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
        eligendi magnam excepturi autem nostrum. Voluptatem odio non eos itaque
        facere voluptas suscipit excepturi quaerat magni, quasi ipsa atque
        voluptatibus asperiores?
      </SecondaryText>
    </Wrapper>
  );
};
