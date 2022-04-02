import * as S from "./styles";

function Feed() {
  const feedValues = [
    { name: "Martina Brown", inOffice: "25/05/2022", upcomingEvent: null },
    {
      name: "Nelly Newman",
      inOffice: null,
      upcomingEvent: {
        title: "Graduate Training",
        location: "London",
        dates: ["28/05/2022", "29/05/2022"],
      },
    },
    {
      name: "Billy Gates",
      inOffice: null,
      upcomingEvent: {
        title: "Client Onboarding",
        location: "London",
        dates: ["26/05/2022", "27/05/2022"],
      },
    },
    { name: "John Marston", inOffice: "22/05/2022", upcomingEvent: null },
  ];

  return (
    <S.FeedContainer>
      <h1 style={{ margin: 0 }}>Feed</h1>
      {feedValues.map((item) => (
        <S.FeedItem>
          <h4 style={{ margin: 0 }}>{item.name}</h4>
          {item.inOffice && <p>In Office: {item.inOffice}</p>}
          {item.upcomingEvent && (
            <div>
              <h5>Upcoming Event: </h5>
              {item.upcomingEvent.dates.map((date) => (
                <p>
                  {item.upcomingEvent.location}: {date}
                </p>
              ))}
            </div>
          )}
        </S.FeedItem>
      ))}
    </S.FeedContainer>
  );
}

export { Feed };
