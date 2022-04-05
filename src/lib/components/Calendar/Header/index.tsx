import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { BookButton } from "../../BookButton";
import { nextMonth, oldMonth } from "../calendar";
import * as S from "./styles";

interface HeaderProps {
  currentDate: Date;
  fontWeightMonthAndYear:
    | "bold"
    | "normal"
    | "bolder"
    | "lighter"
    | "initial"
    | "inherit";
  colorTextHeader: string;
  setCurrentDate: (date: Date) => void;
  clearSelection: () => void;
  showPopUp: () => void;
  sizeArrow: string;
  colorArrows: string;
}

export function Header({
  currentDate,
  colorTextHeader,
  fontWeightMonthAndYear,
  setCurrentDate,
  colorArrows,
  sizeArrow,
  showPopUp,
}: HeaderProps) {
  return (
    <S.HeaderSection>
      <S.ButtonsSection>
        <button
          onClick={() => {
            const old = oldMonth(currentDate);
            setCurrentDate(old);
          }}
        >
          <AiOutlineArrowLeft
            size={sizeArrow || "15"}
            color={`${colorArrows}` || "#000"}
            className={"text-2xl"}
          />
        </button>
        <button
          onClick={() => {
            const next = nextMonth(currentDate);
            setCurrentDate(next);
          }}
        >
          <AiOutlineArrowRight
            size={sizeArrow || "15"}
            color={`${colorArrows}` || "#000"}
          />
        </button>
      </S.ButtonsSection>
      <S.MonthAndYearSection
        fontWeightMonthAndYear={fontWeightMonthAndYear}
        color={colorTextHeader}
      >
        <h1>
          {format(currentDate, "MMMM", {
            locale: enUS,
          })}
        </h1>
        <h1>{format(currentDate, "yyyy")}</h1>
      </S.MonthAndYearSection>
      <div style={{ flex: 1 }}></div>
      <BookButton onClick={() => showPopUp()} />
    </S.HeaderSection>
  );
}
