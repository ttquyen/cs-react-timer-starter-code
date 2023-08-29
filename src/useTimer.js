import { useState, useRef } from "react";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(ini);
  const [splitTime, setSplitTime] = useState([]);

  const isStart = useRef();
  const active = useRef();
  const refInterval = useRef();

  const startTimer = () => {
    active.current.disabled = true;
    isStart.current = true;
    refInterval.current = setInterval(() => {
      if (isStart.current) {
        setTime((time) => time + 1);
      }
    }, 1000);
  };
  const stopTimer = () => {
    if (isStart.current) {
      setSplitTime([...splitTime, time]);
    }
    isStart.current = false;
    clearInterval(refInterval.current);
    active.current.disabled = false;
  };
  const resetTimer = () => {
    setTime(0);
    clearInterval(refInterval.current);
    active.current.disabled = false;
    setSplitTime([]);
  };

  return { time, startTimer, stopTimer, resetTimer, active, splitTime };
};
export default useTimer;
