import styled from "styled-components";
import { Colors } from "./Colors";

export const PrimaryText = styled.span`
  color: ${Colors.primaryTextColor};
  letter-spacing: 1px;
`;

export const PrimaryTextBold = styled(PrimaryText)`
  font-weight: 600;
`;

export const PrimaryTextHeader = styled(PrimaryTextBold)`
  margin: 1rem 0;
`;

export const SecondaryText = styled.span`
    color: ${Colors.secondaryTextColor};
    letter-spacing: 1px;
`;

export const SecondaryTextBold = styled(SecondaryText)`
  font-weight: 600;
`;

export const SecondaryTextHeader = styled(SecondaryTextBold)`
    margin: 0 1rem;
`;

