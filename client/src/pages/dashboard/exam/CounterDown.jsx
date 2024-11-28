import React, { useEffect, useState } from 'react';
import { format, addSeconds } from 'date-fns';

const Countdown = ({ onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 دقيقة بالثواني

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime === 1) {
          clearInterval(timer);
          onTimeUp();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onTimeUp]);

  const formatTime = (seconds) => {
    const date = addSeconds(new Date(0), seconds);
    return format(date, 'mm:ss');
  };

  return (
    <div>
      <h1>Countdown: {formatTime(timeLeft)}</h1>
    </div>
  );
};

export default Countdown;
