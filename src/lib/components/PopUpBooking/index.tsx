import * as S from "./styles";

import { useState } from "react";

function PopUpBooking({
  shown,
  onClose,
}: {
  shown: boolean;
  onClose: () => void;
}) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [errorText, setErrorText] = useState("");
  return (
    <S.Modal shown={shown}>
      <S.Content>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2>Add Office Day</h2>
          <button onClick={onClose}>Close</button>
        </div>
        <div>
          <input
            style={{ marginRight: "10px" }}
            type="date"
            onChange={(e) => {
              const date = new Date(e.target.value);
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
          <button
            onClick={() => {
              const yesterday = new Date();
              yesterday.setDate(yesterday.getDate() - 1);
              if (selectedDate > yesterday) {
                // Update calendar
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
