import { useState } from "react";
import { format } from "date-fns";

import { takeMonth } from "./calendar";
import strings from "./strings.json";
import { CalendarProps } from "./types";

import * as S from "./styles";

import { Header } from "./Header";
import { CalendarEntry } from "../CalendarEntry";

function Calendar({
  bgColor,
  padding,
  borderRadius,
  colorArrows,
  colorTextHeader,
  colorTextDaysOfTheWeek,
  bgMonth,
  wDay,
  hDay,
  sizeArrow,
  fontWeightMonthAndYear,
  calEvents,
}: CalendarProps) {
  const daysWeek = strings["weekdays"];
  const [currentDate, setCurrentDate] = useState(new Date());

  const data = takeMonth(currentDate)();

  function getEventsForDate(day: Date, isToday: boolean) {
    const eventsOccuring = calEvents.filter(
      (event) =>
        event.date.toISOString().substring(0, 10) ===
        day.toISOString().substring(0, 10)
    );

    return (
      <>
        <S.DateNumber>{format(day, "dd")}</S.DateNumber>
        <S.ScrollableEntries>
          {eventsOccuring.map((event) => (
            <CalendarEntry isToday={isToday} event={event} />
          ))}
        </S.ScrollableEntries>
      </>
    );
  }

  return (
    <S.Container>
      <S.CalendarSection
        backgroudColor={bgColor}
        padding={padding}
        borderRadius={borderRadius}
      >
        <Header
          colorTextHeader={colorTextHeader || "#000"}
          currentDate={currentDate}
          fontWeightMonthAndYear={fontWeightMonthAndYear || "normal"}
          setCurrentDate={setCurrentDate}
          colorArrows={colorArrows || "#000"}
          sizeArrow={sizeArrow || "1.5rem"}
        />
        <S.DayWeeksSection>
          {daysWeek.map((dayName, i) => (
            <S.DayWeek key={dayName} color={colorTextDaysOfTheWeek}>
              {dayName}
            </S.DayWeek>
          ))}
        </S.DayWeeksSection>
        <S.Month BgColor={bgMonth}>
          {data.map((week: any) => (
            <S.WeeksSection key={week}>
              {week.map((day: Date) => {
                const isToday =
                  new Date().toISOString().substring(0, 10) ===
                  day.toISOString().substring(0, 10);
                return (
                  <S.Day
                    key={String(day)}
                    width={wDay}
                    height={hDay}
                    isToday={isToday}
                  >
                    <S.TextDay>{getEventsForDate(day, isToday)}</S.TextDay>
                  </S.Day>
                );
              })}
            </S.WeeksSection>
          ))}
        </S.Month>
      </S.CalendarSection>
    </S.Container>
  );
}

export { Calendar };
