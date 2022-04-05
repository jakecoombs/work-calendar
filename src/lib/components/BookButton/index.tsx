import * as S from "./styles";

function BookButton({ onClick }: { onClick: () => void }) {
  return <S.Button onClick={onClick}>Book Office Days</S.Button>;
}

export { BookButton };
