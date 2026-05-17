import { createApi } from '@reduxjs/toolkit/query/react'
import type { AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios'
import axios from 'axios'

import { BASE_URL } from '@shared/constants/app-config'

export type NetworkLog = {
  id: number;
  method?: string;
  type: 'request' | 'response' | 'error';
  url?: string;
  data?: unknown;
  body?: object;
  headers: Record<string, unknown>;
  date?: string;
  status?: number;
  duration?: number;
};

type TimedConfig = InternalAxiosRequestConfig & { _startTime?: number }

export const requestLogs: NetworkLog[] = []
let idCounter = 0
const MAX_LOGS = 200

type LogListener = (logs: NetworkLog[]) => void
let logListener: LogListener | null = null

export const setLogListener = (fn: LogListener | null) => {
  logListener = fn
}

export const clearLogs = () => {
  requestLogs.length = 0
  logListener?.([])
}

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

const pushLog = (log: NetworkLog) => {
  if (requestLogs.length >= MAX_LOGS) requestLogs.shift()
  requestLogs.push(log)
  logListener?.([...requestLogs])
}

axiosInstance.interceptors.request.use(
  config => {
    (config as TimedConfig)._startTime = Date.now()
    pushLog({
      id: ++idCounter,
      type: 'request',
      method: config.method?.toUpperCase(),
      url: config.url,
      data: config.data,
      body: config.data,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_REQUEST_TOKEN}`,
      },
      date: new Date().toISOString(),
    })
    return config
  },
  error => Promise.reject(error),
)

axiosInstance.interceptors.response.use(
  response => {
    const startTime = (response.config as TimedConfig)._startTime
    pushLog({
      id: ++idCounter,
      type: 'response',
      method: response.config.method?.toUpperCase(),
      url: response.config.url,
      data: response.data,
      headers: {
        ...response.headers,
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_REQUEST_TOKEN}`,
      },
      date: new Date().toISOString(),
      status: response.status,
      duration: startTime != null ? Date.now() - startTime : undefined,
    })
    return response.data
  },
  error => {
    const startTime = (error.config as TimedConfig | undefined)?._startTime
    pushLog({
      id: ++idCounter,
      type: 'error',
      method: error.config?.method?.toUpperCase(),
      url: error.config?.url,
      data: error.message,
      headers: error.headers,
      date: new Date().toISOString(),
      status: error.response?.status,
      duration: startTime != null ? Date.now() - startTime : undefined,
    })
    return Promise.reject(error)
  },
)

export default axiosInstance

type IAxiosBaseQuery = {
  url: AxiosRequestConfig['url'];
  method: AxiosRequestConfig['method'];
  data?: AxiosRequestConfig['data'];
  params?: AxiosRequestConfig['params'];
  headers?: AxiosRequestConfig['headers'];
};

const axiosBaseQuery = () => async ({ url, method, data, params, headers }: IAxiosBaseQuery) => {
  try {
    const result = await axiosInstance({
      url,
        method,
        data,
        params,
        headers: {
          ...headers,
          Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_REQUEST_TOKEN}`,
        },
      })
      return { data: result }
    } catch (axiosError) {
      const err = axiosError as { response?: { status: number; data: unknown }; message: string }
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      }
    }
  }

export const api = createApi({
  baseQuery: axiosBaseQuery(),
  keepUnusedDataFor: 300,
  refetchOnReconnect: true,
  endpoints: () => ({}),
})
