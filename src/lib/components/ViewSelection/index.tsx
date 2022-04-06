import * as S from "./styles";

import { ViewSelectionProps } from "./types";
import { BookButton } from "../BookButton";

function ViewSelection({
  showPopUp,
  monthView,
  setMonthView,
}: ViewSelectionProps) {
  return (
    <S.Container>
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
