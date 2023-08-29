import useTimer from "./useTimer";
import { formatTime } from "./formatTime";
import SplitTime from "./SplitTime";

function App() {
  const { time, startTimer, stopTimer, resetTimer, active, splitTime } =
    useTimer(0);
  return (
    <div className="App container">
      <h1>Coder Timer</h1>
      <div className="timer__wrapper">
        <div className="timer__display">
          <p>{formatTime(time)}</p>
        </div>
        <div className="button__wrapper">
          <button className="button" onClick={stopTimer}>
            Stop
          </button>
          <button className="button" ref={active} onClick={startTimer}>
            Start
          </button>
          <button className="button" onClick={resetTimer}>
            Reset
          </button>
        </div>
        {splitTime.length !== 0 && <SplitTime splitTime={splitTime} />}
      </div>
    </div>
  );
}

export default App;
