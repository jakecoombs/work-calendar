import { ProfileImage } from "../ProfileImage";
import { getUserById } from "../utils/users";
import * as S from "./styles";

function Feed() {
  const feedValues = [
    { user: getUserById(4), inOffice: "25/05/2022", upcomingEvent: null },
    {
      user: getUserById(3),
      inOffice: null,
      upcomingEvent: {
        title: "Graduate Training",
        location: "London",
        dates: ["28/05/2022", "29/05/2022"],
      },
    },
    {
      user: getUserById(2),
      inOffice: null,
      upcomingEvent: {
        title: "Client Onboarding",
        location: "London",
        dates: ["26/05/2022", "27/05/2022"],
      },
    },
    { user: getUserById(1), inOffice: "22/05/2022", upcomingEvent: null },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "2px solid black",
        marginLeft: "20px",
        borderRadius: "5px",
      }}
    >
      <S.FeedTitle style={{ backgroundColor: "#000", color: "#fff" }}>
        Feed:
      </S.FeedTitle>
      <S.FeedContainer>
        {feedValues.map((item) => (
          <S.FeedItem
            style={{ background: item.user.bgColor, color: item.user.color }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ marginRight: "5px" }}>
                <ProfileImage user={item.user} />
              </div>
              <h4 style={{ margin: 0 }}>{item.user.name}</h4>
            </div>
            {item.inOffice && <p>In Office: {item.inOffice}</p>}
            {item.upcomingEvent && (
              <div>
                <h5>Upcoming CalendarEvent: </h5>
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
    </div>
  );
}

export { Feed };
