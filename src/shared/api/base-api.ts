import { createApi } from '@reduxjs/toolkit/query/react'
import type { AxiosRequestConfig } from 'axios'
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
};

export const requestLogs: NetworkLog[] = []
let idCounter = 0
const MAX_LOGS = 200

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

const pushLog = (log: NetworkLog) => {
  if (requestLogs.length >= MAX_LOGS) requestLogs.shift()
  requestLogs.push(log)
}

axiosInstance.interceptors.request.use(
  config => {
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
    })
    return response.data
  },
  error => {
    pushLog({
      id: ++idCounter,
      type: 'error',
      method: error.config?.method?.toUpperCase(),
      url: error.config?.url,
      data: error.message,
      headers: error.headers,
      date: new Date().toISOString(),
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
  endpoints: () => ({}),
})
