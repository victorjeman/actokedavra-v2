import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import axios, { type AxiosRequestConfig } from 'axios';

import { BASE_URL } from 'shared/constants/shared-constants';

export const fetchBaseQueryApi =
  (): BaseQueryFn<{
    url: string;
    data?: AxiosRequestConfig['data'];
    method: AxiosRequestConfig['method'];
    headers?: AxiosRequestConfig['headers'];
  }> =>
  async (param) => {
    const result = await axios({
      ...param,
      baseURL: BASE_URL,
    });

    return { data: result.data };
  };
