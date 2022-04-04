import styled from "styled-components";

export const NavigationContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

export const OptionContainer = styled.div<{ active?: boolean }>`
  margin: 20px;
  cursor: pointer;
  ${(props) => `border-bottom: 2px solid ${props.active ? "#666" : "#ccc"}`}
`;

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  flex: 1;
`;
