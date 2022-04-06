import { CalendarEvent } from "../../../types";

export interface CalendarProps {
  bgColor?: string;
  padding?: string;
  borderRadius?: string;
  colorArrows?: string;
  colorTextHeader?: string;
  colorTextDaysOfTheWeek?: string;

  bgMonth?: string;
  wDay?: string;
  hDay?: string;
  sizeArrow?: string;

  fontWeightMonthAndYear?:
    | "bold"
    | "normal"
    | "bolder"
    | "lighter"
    | "initial"
    | "inherit";
  calEvents: CalendarEvent[];
}
