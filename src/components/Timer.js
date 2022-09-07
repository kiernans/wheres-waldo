import React, { useEffect, useState } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(0);

  const incrementTimer = () => {
    setTimer((prevTimer) => prevTimer + 1);
  };

  const formatTimer = (time) => {
    const seconds = `0${Math.round(time % 60)}`.slice(-2);
    const minutes = `0${Math.floor(time / 60) % 60}`.slice(-2);

    return `${minutes}:${seconds}`;
  };

  useEffect(() => {
    const interval = setInterval(incrementTimer, 1000);

    return () => {
      clearInterval(interval);
      setTimer(0);
    };
  }, [timer]);

  return <>{formatTimer(timer)}</>;
};

export default Timer;
