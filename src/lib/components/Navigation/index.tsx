import { NavigationProps } from "./types";

import * as S from "./styles";

function Navigation({ title }: NavigationProps) {
  return (
    <S.NavigationContainer>
      <h1 style={{ marginRight: "20px" }}>{title}</h1>
      <S.OptionContainer active={true}>Work</S.OptionContainer>
      <S.OptionContainer>About</S.OptionContainer>
      <S.OptionContainer>Our Services</S.OptionContainer>
      <S.OptionContainer>Projects</S.OptionContainer>
      <S.ProfileContainer>
        <h3>John Marston</h3>
      </S.ProfileContainer>
    </S.NavigationContainer>
  );
}

export { Navigation };
