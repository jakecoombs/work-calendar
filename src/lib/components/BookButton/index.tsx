import * as S from "./styles";

function BookButton({ onClick }: { onClick: () => void }) {
  return (
    <>
      <S.Button onClick={onClick}>Book Office Days</S.Button>
      <S.Button>Filter Calendar</S.Button>
    </>
  );
}

export { BookButton };
