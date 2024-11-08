import React, { useState, useEffect } from "react";
import * as styles from "./index.module.scss";
import Countdown from "../Countdown";

interface BucketProps {
  batchSize: number;
  onBatchFull: () => void;
  disabled: boolean;
}

function Bucket({ batchSize, onBatchFull, disabled, ...rest }: BucketProps) {
  const [count, setCount] = useState<number>(0);

  const updateCount = () => {
    setCount(count + 1);
    const batchFull = (count + 1) % batchSize === 0;
    if (batchFull) {
      onBatchFull();
    }
  };

  return (
    <button
      type="button"
      onClick={updateCount}
      className={styles.button}
      {...rest}
      disabled={disabled}
    >
      {count} glasses poured
    </button>
  );
}

function ThreeButtons() {
  const [batchCount, setBatchCount] = useState<number>(0);
  const [timeIsUp, setTimeIsUp] = useState<boolean>(false);
  const [startTimer, setStartTimer] = useState<boolean>(false);

  const handleFullBatch = () => {
    setBatchCount(batchCount + 1);
    setStartTimer(true);
  };

  useEffect(() => {
    if (batchCount > 0 && !timeIsUp) {
      setStartTimer(true);
    }
  }, [batchCount]);

  return (
    <>
      {timeIsUp && <h1>Total {batchCount}</h1>}
      {!timeIsUp && startTimer && (
        <Countdown
          key={new Date().toISOString()}
          seconds={5}
          label=""
          onFinish={() => setTimeIsUp(true)}
        />
      )}
      <Bucket onBatchFull={handleFullBatch} batchSize={3} disabled={timeIsUp} />
    </>
  );
}

export default ThreeButtons;
