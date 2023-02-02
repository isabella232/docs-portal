import React from "react";

export const CurrentSectionContext = React.createContext({
  currentSection: "",
  setCurrentSection: (currentSection: string) => {},
});
