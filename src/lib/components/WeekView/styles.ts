import styled from "styled-components";

export const WeekContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 450px;
  overflow-y: scroll;
  background-color: #666;
  padding: 5px;
  border-radius: 10px;
  color: white;

  h2 {
    margin: 0;
    margin-bottom: 5px;
  }
`;

export const Entry = styled.div<{ isToday?: boolean }>`
  font-size: 1rem;
  width: 250px;
  margin: 2px 0;
  padding: 2px;
  border: 1px solid ${(props) => (props.isToday ? "black" : "white")};
  border-radius: 3px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${(props) => props.isToday && "background-color: #fff; color: #000"};

  p {
    margin: 0;
  }
`;

export const ScrollableEntries = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  max-height: 58px;
  overflow-y: scroll;
`;
