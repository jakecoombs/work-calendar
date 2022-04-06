import styled from "styled-components";

interface MonthAndYearSectionProps {
  color?: string;
  fontWeightMonthAndYear?:
    | "bold"
    | "normal"
    | "bolder"
    | "lighter"
    | "initial"
    | "inherit";
}

export const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 100%;
`;

export const MonthAndYearSection = styled.div<MonthAndYearSectionProps>`
  display: flex;
  width: 100%;
  align-items: center;
  margin-left: 20px;

  h1 {
    font-size: 1.2rem;
    margin-bottom: 10px;
    margin-right: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.color || "#000"};
    font-weight: ${(props) => props.fontWeightMonthAndYear || "bold"};
  }
`;

export const ButtonsSection = styled.div`
  display: flex;
  align-items: center;

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
