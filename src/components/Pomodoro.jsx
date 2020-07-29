import React, { useState, useRef } from "react";
import "./Pomodoro.css";

const Pomodoro = () => {
  const [title, setTitle] = useState("It's Your time, make it count!".toUpperCase());
  const [timeLeft, setTimeLeft] = useState(10 * 60);
  const intervelRef = useRef(null);
  // Functions

  // Start timer Functionn
  const startTimer = () => {
    setTitle(`You're doing Amazing!!!`);
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
    setTitle("Good job, Ready for another round?");
    clearInterval(intervelRef.current);
    setTimeLeft(10 * 60);
  };

  // Stop Timer
  const stopTimer = () => {
    setTitle(`Keep going you are almost there!!!`);
    clearInterval(intervelRef.current);
  };

  // Input
  const handleInput = (e) => {
    setTimeLeft(e.target.value * 60);
  };

  const minutes = Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (timeLeft - minutes * 60).toString().padStart(2, "0");
  // Padstart is a JS function to add number in the beganning to another number

  //Minutes functionality
  const fiftenMinute = () => {
    clearInterval(intervelRef.current);
    setTimeLeft(15 * 60);
  };

  const twentyMinutes = () => {
    clearInterval(intervelRef.current);
    setTimeLeft(20 * 60);
  };

  const thirtyMinutes = () => {
    clearInterval(intervelRef.current);
    setTimeLeft(30 * 60);
  };

  return (
    <div className="pomodoro">
      <h2>{title}</h2>
      <div className="minute-button">
        <button onClick={fiftenMinute}>15 Min</button>
        <button onClick={twentyMinutes}>20 Min</button>
        <button onClick={thirtyMinutes}>30 Min</button>
      </div>
      <div className="input">
        <input type="number" min="0" name="time" onChange={handleInput} placeholder="Enter Time" />
      </div>
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
