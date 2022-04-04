import styled from "styled-components";

export const FeedTitle = styled.h1`
  margin: 0;
  padding-left: 10px;
  padding-right: -10px;
  width: "100%";
`;

export const FeedContainer = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  max-height: 450px;
  overflow-y: scroll;
`;

export const FeedItem = styled.div`
  border: 2px solid #666;
  padding: 5px;
  margin: 5px;
  margin-right: 15px;
  font-size: 15px;
`;
