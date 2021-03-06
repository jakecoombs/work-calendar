import { CalendarEvent } from "../../../types";

export interface ViewSelectionProps {
  showPopUp: () => void;
  monthView: boolean;
  setMonthView: (show: boolean) => void;
  calEvents: CalendarEvent[];
  setCalEvents: (events: CalendarEvent[]) => void;
}
