import React, { useState, useEffect, useMemo } from "react";
import * as styles from "./index.module.scss";

type Props = {
  seconds: number;
  label?: string;
  loop?: boolean;
  customClass?: string;
  onFinish?: () => void;
};

function Countdown({
  seconds: initialSeconds,
  label = "Reserving your wines for",
  loop = false,
  customClass = "",
  onFinish = () => {},
}: Props) {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => {
        const end = loop ? initialSeconds : 0;
        const remaining = prevSeconds > 0 ? prevSeconds - 1 : end;
        return remaining;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [loop, seconds]);

  useEffect(() => {
    if (seconds === 0) {
      onFinish();
    }
  }, [seconds, onFinish]);

  const minutes = useMemo(() => Math.floor(seconds / 60), [seconds]);
  const remainingSeconds = useMemo(() => seconds % 60, [seconds]);
  const counter = useMemo(
    () => `00:${`0${minutes}`.slice(-2)}:${`0${remainingSeconds}`.slice(-2)}`,
    [minutes, remainingSeconds]
  );

  return (
    <div className={`${styles.countdown} ${customClass}`}>
      {label && (
        <div className={`${styles.label} countdown-label`}>{label}</div>
      )}
      <div className={`${styles.counter} countdown-counter`}>{counter}</div>
    </div>
  );
}
export default Countdown;
