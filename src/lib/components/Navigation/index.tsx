import * as S from "./styles";

import { NavigationProps } from "./types";
import { getUserById } from "../utils/users";
import { ProfileImage } from "../ProfileImage";

function Navigation({ title }: NavigationProps) {
  const user = getUserById(1);
  return (
    <S.NavigationContainer>
      <h1 style={{ marginRight: "20px" }}>{title}</h1>
      <S.OptionContainer active={true}>Work</S.OptionContainer>
      <S.OptionContainer>About</S.OptionContainer>
      <S.OptionContainer>Our Services</S.OptionContainer>
      <S.OptionContainer>Projects</S.OptionContainer>
      <S.ProfileContainer>
        <div
          style={{
            marginRight: "5px",
          }}
        >
          <ProfileImage user={user} />
        </div>
        <h3>{user.name}</h3>
      </S.ProfileContainer>
    </S.NavigationContainer>
  );
}

export { Navigation };
