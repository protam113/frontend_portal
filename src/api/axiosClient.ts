import axios from 'axios';
import type { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';

import { apiUrl, version } from './api';


const isDev = process.env.NODE_ENV !== 'production';
const urlMain = `${apiUrl}/${version}`;

const authApi = () => {
  return axios.create({
    baseURL: urlMain,
    headers: {

    },
    withCredentials: true,
    timeout: 15000,
  });
};

export const handleAPI = async <T = any>(
  url: string,
  method: 'POST' | 'PATCH' | 'GET' | 'DELETE' = 'GET',
  data?: any
): Promise<T> => {
  try {
    const apiInstance = authApi();
    const config: AxiosRequestConfig = {
      url,
      method,
    };

    // Handle data appropriately based on request method
    if (method !== 'GET' && data) {
      config.data = data;
    } else if (method === 'GET' && data) {
      config.params = data;
    }

    const response: AxiosResponse = await apiInstance(config);

    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;

    if (isDev) {
      const logPayload = {
        url: `${urlMain}${url}`,
        method,
        timestamp: new Date().toISOString(),
      };

      if (axiosError.response) {
        console.error('❌ API ERROR:', {
          ...logPayload,
          status: axiosError.response.status,
          statusText: axiosError.response.statusText,
          data: axiosError.response.data,
        });
      } else if (axiosError.request) {
        console.error('❌ API ERROR (NO RESPONSE):', {
          ...logPayload,
          message: axiosError.message,
        });
      } else {
        console.error('❌ API ERROR (SETUP):', {
          ...logPayload,
          message: axiosError.message,
        });
      }
    }

    throw error;
  }
};
