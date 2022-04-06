import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const TabsContainer = styled.div`
  display: flex;
  flex: 1;
  margin-right: 40px;
`;

export const TabContainer = styled.div<{ active: boolean }>`
  flex: 1;
  border: 2px solid black;
  border-radius: 3px;
  text-align: center;
  margin: 0 20px;
  ${(props) => (props.active ? "background-color: black; color: white;" : "")}
`;
