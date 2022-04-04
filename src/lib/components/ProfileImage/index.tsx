import * as S from "./styles";

import { User } from "../../../types";

function ProfileImage({ user }: { user: User }) {
  return <S.RoundedImage src={`/assets/${user.image}`} alt={user.name} />;
}

export { ProfileImage };
