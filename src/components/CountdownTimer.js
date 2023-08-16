import React, { useState, useEffect, useCallback } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = useCallback(() => {
    const now = new Date().getTime();
    const targetTime = new Date(targetDate).getTime();
    const timeDifference = targetTime - now;

    if (timeDifference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds
    };
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return (
    <div className='mt-14 flex justify-center'>
      <div className="flex flex-col gap-2 items-center w-14">
        <p className='p-2 w-10 bg-pink-900 rounded-md font-semibold text-white'>
          {timeLeft.days}
        </p> 
        <p>hari</p>
      </div>
      
      <div className="flex flex-col gap-2 items-center w-14">
        <p className='p-2 w-10 bg-pink-900 rounded-md font-semibold text-white'>
          {timeLeft.hours}
        </p>
        <p>jam</p>
      </div>

      <div className="flex flex-col gap-2 items-center w-14">
        <p className='p-2 w-10 bg-pink-900 rounded-md font-semibold text-white'>
          {timeLeft.minutes}
        </p>
        <p>menit</p>
      </div>

      <div className='flex flex-col gap-2 items-center w-14'>
        <p className='p-2 w-10 bg-pink-900 rounded-md font-semibold text-white'>
          {timeLeft.seconds}
        </p>
        <p>detik</p>
      </div>
    </div>
  );
};

export default CountdownTimer;

