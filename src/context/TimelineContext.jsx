import React, { createContext, useState, useContext } from "react";

const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);

  const logActivity = (type, friendName) => {
    const newEntry = {
      id: Date.now(),
      type: type,
      friend: friendName,
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      time: new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setTimeline((prevTimeline) => [newEntry, ...prevTimeline]);
  };

  return (
    <TimelineContext.Provider value={{ timeline, logActivity }}>
      {children}
    </TimelineContext.Provider>
  );
};

export const useTimeline = () => useContext(TimelineContext);
