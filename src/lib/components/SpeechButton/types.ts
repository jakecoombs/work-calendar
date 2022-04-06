import { CalendarEvent } from "../../../types";

export interface SpeechButtonProps {
  calEvents: CalendarEvent[];
  setCalEvents: (events: CalendarEvent[]) => void;
}
