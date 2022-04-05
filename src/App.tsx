import React, { useState } from "react";
import { Calendar } from "./lib/components/Calendar";
import { Feed } from "./lib/components/Feed";
import { Navigation } from "./lib/components/Navigation";
import { PopUpBooking } from "./lib/components/PopUpBooking";

const App: React.FC = () => {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <>
      <PopUpBooking shown={showBooking} onClose={() => setShowBooking(false)} />
      <Navigation title="Calendar" />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
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
          showPopUp={() => setShowBooking(true)}
        />
        <Feed />
      </div>
    </>
  );
};

export default App;
