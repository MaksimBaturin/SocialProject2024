"use client";
import React, { useState, useEffect, useRef } from 'react';
import './pomodoro.css';


const PomodoroTimer = () => {
    const [workTime, setWorkTime] = useState(25);
    const [breakTime, setBreakTime] = useState(5);
    const [timeLeft, setTimeLeft] = useState(workTime * 60);
    const [isRunning, setIsRunning] = useState(false);
    const [isWorkPeriod, setIsWorkPeriod] = useState(true);
    const intervalRef = useRef(null);

    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setTimeLeft(prevTime => {
                    if (prevTime === 0) {
                        if (isWorkPeriod) {
                            setTimeLeft(breakTime * 60);
                        } else {
                            setTimeLeft(workTime * 60);
                        }
                        setIsWorkPeriod(prev => !prev);
                        return prevTime;
                    }
                    return prevTime - 1;
                });
            }, 1000);
        } else {
            clearInterval(intervalRef.current);
        }

        return () => clearInterval(intervalRef.current);
    }, [isRunning, isWorkPeriod, workTime, breakTime]);

    const startTimer = () => {
        setIsRunning(true);
    };

    const pauseTimer = () => {
        setIsRunning(false);
    };

    const resetTimer = () => {
        setIsRunning(false);
        setTimeLeft(workTime * 60);
        setIsWorkPeriod(true);
    };

    const skipPeriod = () => {
        if (isWorkPeriod) {
            setTimeLeft(breakTime * 60);
        } else {
            setTimeLeft(workTime * 60);
        }
        setIsWorkPeriod(prev => !prev);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60).toString().padStart(2, '0');
        const seconds = (time % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    };

    return (
        <div className="container">
            <div className="content">
                <div className="timer">
                    <h1>Таймер Pomodoro</h1>
                    <h2>{isWorkPeriod ? 'Время для работы!' : 'Время для отдыха'}</h2>
                    <p>{formatTime(timeLeft)}</p>
                </div>
                <div className="controls">
                    <button onClick={startTimer} disabled={isRunning}>Запустить</button>
                    <button onClick={pauseTimer} disabled={!isRunning}>Остановить</button>
                    <button onClick={resetTimer}>Перезапустить</button>
                    <button onClick={skipPeriod}>Пропустить</button>
                </div>
                <div className="settings">
                    <label>
                        Время работы (минуты):
                        <input
                            type="number"
                            value={workTime}
                            onChange={(e) => setWorkTime(parseInt(e.target.value))}
                        />
                    </label>
                    <label>
                        Время отдыха (минуты):
                        <input
                            type="number"
                            value={breakTime}
                            onChange={(e) => setBreakTime(parseInt(e.target.value))}
                        />
                    </label>
                </div>
            </div>
        </div>
    );
};

export default PomodoroTimer;