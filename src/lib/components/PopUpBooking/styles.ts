import styled from "styled-components";

export const Modal = styled.div<{ shown?: boolean }>`
  position: fixed;
  z-index: 3;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  ${(props) => `display: ${props.shown ? "block" : "none"}`}
`;

export const Content = styled.div`
  background-color: white;
  position: absolute;
  top: 20%;
  left: 30%;
  width: 40%;
  padding: 20px;
  border-radius: 5px;
  border: 2px solid black;
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;

  input {
    margin-bottom: 10px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
