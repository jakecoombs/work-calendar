import { format } from "date-fns";
import { useState, useEffect } from "react";
import * as S from "./styles";
import { SpeechButtonProps } from "./types";

function SpeechButton({ calEvents, setCalEvents }: SpeechButtonProps) {
  const initialDate = new Date("04/13/2022");
  initialDate.setHours(0);

  const [listening, setIsListening] = useState(false);
  const [responseText, setResponseText] = useState("");
  const [addDate, setAddDate] = useState<Date>(initialDate);

  useEffect(() => console.log(calEvents), [calEvents]);

  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }

  async function mockSpeechButton() {
    setIsListening(true);
    await timeout(2000);
    setIsListening(false);

    const newEvents = [
      ...calEvents,
      {
        userId: 1,
        date: new Date(addDate),
        location: "London",
      },
    ];
    setCalEvents(newEvents);

    setResponseText(`Added Event for ${format(addDate, "eee dd MMMM")}`);
  }

  return (
    <S.SpeechContainer>
      <div>
        {!listening && (
          <S.Button
            onClick={() =>
              mockSpeechButton().then(() => {
                const nextDate = addDate;
                nextDate.setDate(nextDate.getDate() + 1);
                nextDate.setHours(0);
                setAddDate(nextDate);
              })
            }
          >
            Use Speech
          </S.Button>
        )}
        {listening && <S.Button>Listening...</S.Button>}
      </div>
      <S.ResponseText>{responseText}</S.ResponseText>
    </S.SpeechContainer>
  );
}

export { SpeechButton };
