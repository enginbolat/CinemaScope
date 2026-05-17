declare global {
  namespace NodeJS {
    interface ProcessEnv {
      EXPO_PUBLIC_API_REQUEST_TOKEN: string;
    }
  }
}

export {};
