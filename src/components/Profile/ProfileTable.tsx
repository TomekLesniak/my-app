import React, { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors";
import {
  ProfileText,
  ProfileTextBold,
} from "../../styledHelpers/profileHelpers";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
`;

const Table = styled.table`
  color: ${Colors.primaryTextColor};
  thead {
    text-align: left;
    border-bottom: 1px solid ${Colors.bordersColor};
  }

  td,
  th {
    padding: 0.5rem;
  }

  th {
    font-weight: bold;
  }
`;

interface Props {
  headers: string[];
  records: string[][];
}

export const ProfileTable: FC<Props> = ({ headers, records }: Props) => {
  return (
    <Wrapper>
      <Table>
        <thead>
          <tr>
            {headers.map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {records.map((row, i) => (
            <tr key={`${row}${i}`}>
              {row.map((content) => (
                <td>{content}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
};
