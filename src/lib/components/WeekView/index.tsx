import * as S from "./styles";

import { format } from "date-fns";
import { takeWeek } from "../Calendar/calendar";
import { WeekViewProps } from "./types";
import { CalendarEntry } from "../CalendarEntry";

function WeekView({ calEvents }: WeekViewProps) {
  const week = takeWeek()();

  function getEventsForDate(day: Date) {
    const eventsOccuring = calEvents.filter(
      (event) =>
        event.date.toISOString().substring(0, 10) ===
        day.toISOString().substring(0, 10)
    );
    return (
      <S.Entry>
        <p style={{ fontWeight: "bold" }}>{format(day, "eee dd MMMM")}</p>
        {eventsOccuring.map((event) => (
          <CalendarEntry event={event} center />
        ))}
      </S.Entry>
    );
  }

  return (
    <S.WeekContainer>
      <h2>This Week</h2>
      {week.map((day) => getEventsForDate(day))}
    </S.WeekContainer>
  );
}

export { WeekView };
