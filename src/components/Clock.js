import React from "react";
import { useEffect, useState } from "react";

function Clock(props) {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    //setCurrentDate(new Date());
    console.log("mount it!");
  }, []);

  setInterval(() => {
    setCurrentDate(new Date());
  }, 1000);

  return (
    <div className="clock">{`${currentDate.getDate()} : ${
      currentDate.getMonth() + 1
    } : ${currentDate.getFullYear()} : ${currentDate.getSeconds()}`}</div>
  );
}

export default Clock;
