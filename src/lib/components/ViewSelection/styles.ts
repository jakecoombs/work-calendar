import styled from "styled-components";

export const Container = styled.div`
  width: 70%;
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const TabsContainer = styled.div`
  display: flex;
  flex: 1;
  margin: 0 20px;
`;

export const TabContainer = styled.div<{ active: boolean }>`
  flex: 1;
  display: flex;
  border: 2px solid black;
  border-radius: 3px;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  ${(props) => (props.active ? "background-color: black; color: white;" : "")}
`;
