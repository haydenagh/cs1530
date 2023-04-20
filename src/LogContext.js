// LogContext.js
import { createContext, useState, useEffect } from 'react';

export const LogContext = createContext();

export const LogProvider = ({ children }) => {
  const [foodLogs, setFoodLogs] = useState([]);
  const [workoutLogs, setWorkoutLogs] = useState([]);

  const handleFoodLogSubmit = (newFoodLog) => {
    setFoodLogs([newFoodLog, ...foodLogs]);
  };

  const handleWorkoutLogSubmit = (newWorkoutLog) => {
    setWorkoutLogs([newWorkoutLog, ...workoutLogs]);
  };

  useEffect(() => {
    const storedFoodLogs = JSON.parse(localStorage.getItem('foodLogs'));
    if (storedFoodLogs) {
      setFoodLogs(storedFoodLogs);
    }
    const storedWorkoutLogs = JSON.parse(localStorage.getItem('workoutLogs'));
    if (storedWorkoutLogs) {
      setWorkoutLogs(storedWorkoutLogs);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('foodLogs', JSON.stringify(foodLogs));
  }, [foodLogs]);

  useEffect(() => {
    localStorage.setItem('workoutLogs', JSON.stringify(workoutLogs));
  }, [workoutLogs]);

  return (
    <LogContext.Provider
      value={{ foodLogs, workoutLogs, handleFoodLogSubmit, handleWorkoutLogSubmit }}
    >
      {children}
    </LogContext.Provider>
  );
};
