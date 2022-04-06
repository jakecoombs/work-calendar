import * as S from "./styles";

import { getUserById } from "../../utils/users";
import { CalendarEntryProps } from "./types";

function CalendarEntry({ event, center }: CalendarEntryProps) {
  const user = getUserById(event.userId);
  return (
    <S.Entry
      style={{ background: user.bgColor, color: user.color }}
      center={center}
    >
      <p style={{ fontWeight: "bold" }}>{user.name}</p>
      <p>{event.location}</p>
    </S.Entry>
  );
}

export { CalendarEntry };
