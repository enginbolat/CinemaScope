import { I18nManager } from 'react-native'

import { initReactI18next } from 'react-i18next'

import * as Localization from 'expo-localization'

import i18next, { type InitOptions } from 'i18next'

import { en } from './lang/en'
import { tr } from './lang/tr'
import { type DotNotation, type TranslationKeys } from './types'

export type TranslationKey = DotNotation<TranslationKeys>;

const deviceLocale = Localization.getLocales()[0]?.languageCode ?? 'en'
I18nManager.forceRTL(['ar', 'he', 'fa'].includes(deviceLocale))

const options: InitOptions = {
  resources: {
    en: { translation: en },
    tr: { translation: tr },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
}

i18next.use(initReactI18next).init(options)

export default i18next
