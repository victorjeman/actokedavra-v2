import { nanoid } from '@reduxjs/toolkit';
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

      // @ts-ignore
      transformResponse: (data: Actor[]) => {
        const transformedResponse = data?.map((actor) => {
          const updatedHobbies = actor.hobbies.map((hobby) => ({ name: hobby, id: nanoid() }));
          const updatedActor = { ...actor, hobbies: updatedHobbies };

          return updatedActor;
        });

        return transformedResponse;
      },

      providesTags: ['actors'],
    }),

    createActor: builder.mutation({
      query: (actor: Actor) => ({
        url: '/actors',
        method: 'post',
        data: actor,
      }),
      invalidatesTags: ['actors'],
    }),

    // updateProject: builder.mutation({
    //   query: ({ id, project }) => ({
    //     url: `/projects/${id}`,
    //     method: 'put',
    //     data: project,
    //   }),

    //   invalidatesTags: ['Projects'],
    // }),

    // deleteProject: builder.mutation({
    //   query: (id) => ({
    //     url: `/projects/${id}`,
    //     method: 'delete',
    //   }),

    //   invalidatesTags: ['Projects'],
    // }),
    // }),
  }),
});

export const { useGetActorsQuery, useCreateActorMutation } = actorApi;
