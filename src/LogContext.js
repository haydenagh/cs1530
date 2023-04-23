// LogContext.js
// Keeps local storage loaded when switching pages!
// This page is magical
import { createContext, useState, useEffect } from 'react';

export const LogContext = createContext();

export const LogProvider = ({ children }) => {
  const [foodLogs, setFoodLogs] = useState([]);

  const handleSubmit = (newFoodLog) => {
    setFoodLogs([newFoodLog, ...foodLogs]);
  };

  useEffect(() => {
    const storedFoodLogs = JSON.parse(localStorage.getItem('foodLogs'));
    if (storedFoodLogs) {
      setFoodLogs(storedFoodLogs);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('foodLogs', JSON.stringify(foodLogs));
  }, [foodLogs]);

  return (
    <LogContext.Provider value={{ foodLogs, handleSubmit }}>
      {children}
    </LogContext.Provider>
  );
};
