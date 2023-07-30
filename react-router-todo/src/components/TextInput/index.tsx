import styled from "@emotion/styled";
import React from "react";

const Container = styled.input`
  font-size: 1.2rem;
  padding: 8px;
`;

interface Props {
  readonly toDo: string;
  readonly onChange: (text: string) => void;
}

export const TextInput = ({ toDo, onChange }: Props) => {
  return (
    <Container
      value={toDo}
      onChange={(event) => onChange(event.target.value)}
    />
  );
};
