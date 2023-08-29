import React from "react";
import { formatTime } from "./formatTime";

function SplitTime({ splitTime }) {
  return (
    <div className="split-time__wrapper">
      {splitTime.map((time) => (
        <p className="split-time">{formatTime(time)}</p>
      ))}
    </div>
  );
}
export default SplitTime;
