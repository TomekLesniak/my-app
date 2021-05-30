import styled from "styled-components";
import { Colors } from "./Colors";

export const ProfileText = styled.span`
  color: ${Colors.primaryTextColor};
  text-align: left;
`;

export const ProfileTextBold = styled(ProfileText)`
  font-weight: 600;
`;

export const ProfileGrayedText = styled.span`
margin: 0.5rem 0;
display: inline-block;
color: ${Colors.secondaryTextColor};
`;

export const ProfileTextBoldHeader = styled(ProfileTextBold)`
  margin: 1rem 0;
`;

export const ProfileGrayedTextHeader = styled(ProfileGrayedText)`
    margin-top: 1rem;
`;