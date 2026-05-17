export interface LocalizationContextProps {
  locale: string;
  setLocale: (locale: string) => void;
}

export interface LocalizationProviderProps {
  children: React.JSX.Element;
}
