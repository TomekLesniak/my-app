import React, { FC, useState } from "react";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors";

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
    flex: 1 1 auto;
  }

  th {
    font-weight: bold;
  }
`;

const MyInput = styled.input`
  width: 100%;
  display: inline-block;
  margin-top: 0.2rem;
  font-size: 1.2rem;
  letter-spacing: 1px;
  padding: 0.2rem;
  border-radius: 5px;
  border: 1px solid ${Colors.bordersColor};
  color: ${Colors.primaryTextColor};
  font-weight: bold;
`;

interface Props {
  headers: string[];
  records: string[][];
  isEditing: boolean;
}

export const ProfileTable: FC<Props> = ({
  headers,
  records,
  isEditing,
}: Props) => {
  const [recordsState, setRecordsState] = useState(records);
  return (
    <Wrapper>
      <Table>
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={`${h}${i}`}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {recordsState.map((row, i) => (
            <tr key={`${row}${i}`}>
              {!isEditing &&
                row.map((content, j) => (
                  <td key={`${content}${j}`}>{content}</td>
                ))}
              {isEditing &&
                row.map((content, j) => (
                  <td key={`${i}${j}`}>
                    <MyInput
                      defaultValue={content}
                      onChange={(ev) => {
                        let updated = recordsState[i][j];
                        updated = ev.target.value;
                        recordsState[i][j] = updated;
                        setRecordsState(recordsState);
                      }}
                    />
                  </td>
                ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
};
