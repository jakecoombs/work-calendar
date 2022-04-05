import * as S from "./styles";

import { Event } from "../../../types";
import { getUserById } from "../utils/users";

function CalendarEntry({ event }: { event: Event }) {
  const user = getUserById(event.userId);
  return (
    <S.Entry style={{ background: user.bgColor, color: user.color }}>
      <p style={{ fontWeight: "bold" }}>{user.name}</p>
      <p>{event.location}</p>
    </S.Entry>
  );
}

export { CalendarEntry };
