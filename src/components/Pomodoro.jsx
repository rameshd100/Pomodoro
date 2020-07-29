import React, { useState, useRef } from "react";
import "./Pomodoro.css";

const Pomodoro = () => {
  const [title, setTitle] = useState("It's Your time make it count".toUpperCase());
  const [timeLeft, setTimeLeft] = useState(30 * 60);
  const intervelRef = useRef(null);
  // Functions

  // Start timer Functionn
  const startTimer = () => {
    intervelRef.current = setInterval(() => {
      return setTimeLeft((timeLeft) => {
        if (timeLeft >= 1) return timeLeft - 1;

        // RESET THE TIMER

        return 0;
      });
    }, 1000);
  };
  //Restart Timer Function
  const resetTimer = () => {
    return setTimeLeft(30 * 60);
  };

  // Stop Timer
  const stopTimer = () => {
    clearInterval(intervelRef.current);
  };

  const minutes = Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (timeLeft - minutes * 60).toString().padStart(2, "0");

  // Padstart is a JS function to add number in the beganning to another number

  return (
    <div className="pomodoro">
      <h2>{title}</h2>
      <div className="timer">
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>
      <div className="buttons">
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer} className="stop">
          Stop
        </button>
        <button onClick={resetTimer}>Restart</button>
      </div>
    </div>
  );
};

export default Pomodoro;
