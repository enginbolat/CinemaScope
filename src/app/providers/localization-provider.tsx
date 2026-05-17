import React, { createContext, useContext, useState } from 'react';
import { I18nManager } from 'react-native';

import i18n from '@core/i18n/i18n.config';
import { LocalizationContextProps, LocalizationProviderProps } from './types';

export const LocalizationContext = createContext<LocalizationContextProps>({
  locale: 'en',
  setLocale: () => {},
});

const LocalizationProvider: React.FC<LocalizationProviderProps> = ({ children }) => {
  const [locale, setLocaleLang] = useState(i18n.language?.split('-')[0] || 'en');

  const setLocale = (newLocale: string) => {
    I18nManager.forceRTL(['ar', 'he', 'fa'].includes(newLocale));
    i18n.changeLanguage(newLocale);
    setLocaleLang(newLocale);
  };

  return (
    <LocalizationContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = () => useContext(LocalizationContext);
export default LocalizationProvider;
