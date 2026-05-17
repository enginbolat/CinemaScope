declare global {
  namespace NodeJS {
    interface ProcessEnv {
      EXPO_PUBLIC_API_REQUEST_TOKEN: string;
    }
  }
}

declare module '*.png' {
  const value: number
  export default value
}

export {}
