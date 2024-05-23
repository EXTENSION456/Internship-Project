import React, { useEffect, useState } from "react";

function Countdown() {
  const [seconds, setSeconds] = useState(10);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  useEffect(() => {
    if (seconds === 0) {
      setIsActive(false);
    }
  }, [seconds]);



  return (
    <div>
      <div className="time">{seconds}s</div>
    </div>
  );
}

export default Countdown;
