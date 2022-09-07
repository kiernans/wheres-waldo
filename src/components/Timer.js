import React, { useEffect, useState } from "react";

const Timer = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [milliseconds, setMilliseconds] = useState(0);

  const incrementMinute = () => {
    setMinutes((prevMinutes) => prevMinutes + 1);
  };

  const incrementSecond = () => {
    setSeconds((prevSeconds) => prevSeconds + 1);
  };

  const incrementMillisecond = () => {
    setMilliseconds((prevMilliseconds) => prevMilliseconds + 1);
  };

  useEffect(() => {
    let interval = 0;

    interval = setInterval(incrementSecond, 1000);

    return () => {
      clearInterval(interval);
      setSeconds(0);
    };
  }, []);

  return (
    <div>
      {minutes}:{seconds}:{milliseconds}
    </div>
  );
};

export default Timer;
