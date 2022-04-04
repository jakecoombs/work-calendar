import styled from "styled-components";

export const FeedTitle = styled.h1`
  margin: 0 25px;
`;

export const FeedContainer = styled.div`
  margin: 0 25px;
  display: flex;
  flex-direction: column;
  max-height: 450px;
  overflow-y: scroll;
`;

export const FeedItem = styled.div`
  border: 2px solid #666;
  padding: 5px;
  margin: 5px 2px;
  font-size: 15px;
`;
