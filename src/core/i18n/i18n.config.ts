import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';
import { I18nManager } from 'react-native';

import { en } from './lang/en';
import { tr } from './lang/tr';
import { DotNotation, TranslationKeys } from './types';

export type TranslationKey = DotNotation<TranslationKeys>;

const deviceLocale = Localization.getLocales()[0]?.languageCode ?? 'en';
I18nManager.forceRTL(['ar', 'he', 'fa'].includes(deviceLocale));

i18next.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    tr: { translation: tr },
  },
  lng: deviceLocale,
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
  initImmediate: false,
});

export default i18next;
