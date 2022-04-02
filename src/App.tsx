import React from "react";
import { Calendar } from "./lib/components/Calendar";

const App: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Calendar
          padding="20px"
          bgColor="#001e3c"
          bgMonth="#001e3c"
          borderRadius="20px"
          colorArrows="#FFF"
          colorTextHeader="#FFF"
          colorTextDaysOfTheWeek="#FFF"
          colorDays="#FFF"
          colorSelectDay="#FFF"
          wDay="60px"
          hDay="50px"
          sizeArrow="25"
          fontWeightMonthAndYear="bold"
          circleSelectDayColor="#007fff"
          initialDate={new Date("2022-03-15")}
          endDate={new Date("2022-03-28")}
        />
      </div>
    </div>
  );
};

export default App;
