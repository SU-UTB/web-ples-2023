import { useEffect, useState } from "react";
import {
  CountdownItem,
  CountdownNumber,
  CountdownWrapper,
} from "./Countdown.styled";

interface CountdownProps {
  endTime: string;
}

const Countdown = ({ endTime }: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState(() => {
    const endTimeInMs = new Date(endTime).getTime();
    const currentTime = new Date().getTime();
    return Math.max(endTimeInMs - currentTime, 0);
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const endTimeInMs = new Date(endTime).getTime();
      const currentTime = new Date().getTime();
      setTimeLeft(Math.max(endTimeInMs - currentTime, 0));
    }, 1000);
    return () => clearInterval(intervalId);
  }, [endTime]);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

  return (
    <>
      <CountdownWrapper>
        <CountdownItem>
          <CountdownNumber>{days}</CountdownNumber>
          dní
        </CountdownItem>
        <CountdownItem>
          <CountdownNumber>{hours}</CountdownNumber>
          hodin
        </CountdownItem>
        <CountdownItem>
          <CountdownNumber>{minutes}</CountdownNumber>
          minut
        </CountdownItem>
      </CountdownWrapper>
    </>
  );
};

export default Countdown;
