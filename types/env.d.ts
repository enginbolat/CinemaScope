declare global {
  namespace NodeJS {
    interface ProcessEnv {
      EXPO_PUBLIC_API_REQUEST_TOKEN: string;
      EXPO_PUBLIC_BASE_URL: string;
      EXPO_PUBLIC_BASE_W500_URL: string;
    }
  }
}

declare module '*.png' {
  const value: number
  export default value
}

export {}
