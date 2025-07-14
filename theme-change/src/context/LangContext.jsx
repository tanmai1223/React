import { createContext, useState } from "react";

const LangContext = createContext();

const LangEnums = {
  English: 'en',
  Hindi: 'hi',
  Kannada: 'ka',
  Telugu : 'te'
};

const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(LangEnums.English);

  const langChange = (e) => {
    setLang(e);
  };

  return (
    <LangContext.Provider value={{ lang, langChange }}>
      {children}
    </LangContext.Provider>
  );
};

export { LangProvider, LangContext, LangEnums };
