import { createContext, useContext, useState } from 'react';
import translations from '../data/translations.json';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('pt');

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  
  const t = (path) => {
    const keys = path.split('.');
    let current = translations;
    for (const key of keys) {
      if (current[key] === undefined) return path;
      current = current[key];
    }
    // Retorna na lingua selecionada, faz fallback pra PT e depois pro proprio path se não achar
    return current[context.lang] || current['pt'] || path;
  };

  return { ...context, t };
}
