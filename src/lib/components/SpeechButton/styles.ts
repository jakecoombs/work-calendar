import styled from "styled-components";

export const Button = styled.button`
  font-size: 1em;
  border: 2px solid black;
  margin: 0 2px;
  border-radius: 3px;
  cursor: pointer;
`;

export const SpeechContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 120px;

  * {
    margin: 0;
  }
`;

export const ResponseText = styled.p`
  text-align: center;
  font-size: 0.75em;
`;
