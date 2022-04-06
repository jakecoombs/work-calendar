import React, { useState } from "react";
import { calendarEvents } from "./consts";
import { Calendar } from "./lib/components/Calendar";
import { Feed } from "./lib/components/Feed";
import { Navigation } from "./lib/components/Navigation";
import { ViewSelection } from "./lib/components/ViewSelection";
import { PopUpBooking } from "./lib/components/PopUpBooking";

const App: React.FC = () => {
  const [showBooking, setShowBooking] = useState(false);
  const [monthView, setMonthView] = useState(true);
  const [calEvents, setCalEvents] = useState(calendarEvents);

  return (
    <>
      <PopUpBooking
        shown={showBooking}
        onClose={() => setShowBooking(false)}
        calEvents={calEvents}
        setCalEvents={setCalEvents}
      />
      <Navigation title="Calendar" />
      <ViewSelection
        showPopUp={() => setShowBooking(true)}
        monthView={monthView}
        setMonthView={setMonthView}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {monthView && (
          <Calendar
            padding="20px"
            bgColor="#666"
            bgMonth="#666"
            borderRadius="20px"
            colorArrows="#FFF"
            colorTextHeader="#FFF"
            colorTextDaysOfTheWeek="#FFF"
            colorDays="#FFF"
            colorSelectDay="#FFF"
            wDay="60px"
            hDay="50px"
            sizeArrow="20"
            fontWeightMonthAndYear="bold"
            circleSelectDayColor="#007fff"
            initialDate={new Date("2022-03-15")}
            endDate={new Date("2022-03-28")}
            calEvents={calEvents}
          />
        )}
        {!monthView && <div>Week View</div>}
        <Feed />
      </div>
    </>
  );
};

export default App;
