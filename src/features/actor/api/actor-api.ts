import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { BaseQueryFn, createApi } from '@reduxjs/toolkit/query/react';

import { Actor } from 'features/actor/types/actor-types';
import { fetchBaseQueryApi } from 'shared/api/fetch-base-query-api';

export const actorApi = createApi({
  reducerPath: 'actorApi',

  baseQuery: fetchBaseQueryApi(),

  endpoints: (builder: EndpointBuilder<BaseQueryFn, string, string>) => ({
    getActors: builder.query<Actor[], void>({
      query: () => ({ url: 'actors', method: 'get' }),

      providesTags: ['actors'],
    }),
  }),
});

export const { useGetActorsQuery } = actorApi;
