import styled from "styled-components";

export const Entry = styled.div<{ center?: boolean; isToday?: boolean }>`
  width: calc(100% - 8px);
  font-size: 0.75rem;
  margin: 2px 0;
  padding: 2px;
  border: 1px solid ${(props) => (props.isToday ? "black" : "white")};
  border-radius: 3px;

  ${(props) => props.center && "text-align: center"}
`;
