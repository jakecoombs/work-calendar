import * as S from "./styles";

import { ViewSelectionProps } from "./types";
import { BookButton } from "../BookButton";
import { SpeechButton } from "../SpeechButton";

function ViewSelection({
  showPopUp,
  monthView,
  setMonthView,
  calEvents,
  setCalEvents,
}: ViewSelectionProps) {
  return (
    <S.Container>
      <SpeechButton calEvents={calEvents} setCalEvents={setCalEvents} />
      <S.TabsContainer>
        <S.TabContainer onClick={() => setMonthView(false)} active={!monthView}>
          Week View
        </S.TabContainer>
        <S.TabContainer onClick={() => setMonthView(true)} active={monthView}>
          Month View
        </S.TabContainer>
      </S.TabsContainer>
      <BookButton onClick={() => showPopUp()} />
    </S.Container>
  );
}

export { ViewSelection };
