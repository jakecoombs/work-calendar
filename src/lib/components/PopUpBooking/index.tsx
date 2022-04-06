import * as S from "./styles";

import { useState } from "react";
import { CalendarEvent } from "../../../types";

function PopUpBooking({
  shown,
  onClose,
  calEvents,
  setCalEvents,
}: {
  shown: boolean;
  onClose: () => void;
  calEvents: CalendarEvent[];
  setCalEvents: (events: CalendarEvent[]) => void;
}) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [location, setLocation] = useState("");
  const [errorText, setErrorText] = useState("");
  return (
    <S.Modal shown={shown}>
      <S.Content>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2>Add Office Day</h2>
          <button onClick={onClose}>Close</button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "300px",
          }}
        >
          <input
            type="date"
            onChange={(e) => {
              const date = new Date(e.target.value);
              date.setHours(0);
              const yesterday = new Date();
              yesterday.setDate(yesterday.getDate() - 1);

              if (date < yesterday) {
                setErrorText("Cannot set office days for days in the past.");
              } else {
                setErrorText("");
              }

              setSelectedDate(date);
            }}
          />
          <input
            type="text"
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
          />
          <button
            onClick={() => {
              const yesterday = new Date();
              yesterday.setDate(yesterday.getDate() - 1);
              if (selectedDate > yesterday) {
                let newEvents = [...calEvents];
                newEvents.push({
                  userId: 1,
                  date: selectedDate,
                  location: location,
                });
                setCalEvents(newEvents);
                onClose();
              }
            }}
          >
            Add Date
          </button>
        </div>
        <p style={{ color: "red" }}>{errorText}</p>
      </S.Content>
    </S.Modal>
  );
}

export { PopUpBooking };
