import { CalendarEvent } from "../../../types";

export interface CalendarEntryProps {
  event: CalendarEvent;
  isToday: boolean;
  center?: boolean;
}
