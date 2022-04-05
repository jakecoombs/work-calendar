export interface CalendarProps {
  bgColor?: string;
  padding?: string;
  borderRadius?: string;
  colorArrows?: string;
  colorTextHeader?: string;
  colorTextDaysOfTheWeek?: string;
  colorDays?: string;
  bgMonth?: string;
  wDay?: string;
  hDay?: string;
  sizeArrow?: string;
  colorSelectDay?: string;
  circleSelectDayColor?: string;
  fontWeightMonthAndYear?:
    | "bold"
    | "normal"
    | "bolder"
    | "lighter"
    | "initial"
    | "inherit";

  initialDate?: Date;
  endDate?: Date;
  isContinuous?: boolean;
  showPopUp: () => void;
}
