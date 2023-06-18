import { nanoid } from '@reduxjs/toolkit';
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { BaseQueryFn, createApi } from '@reduxjs/toolkit/query/react';

import { Actor, ActorFormValues } from 'features/actor/types/actor-types';
import { fetchBaseQueryApi } from 'shared/api/fetch-base-query-api';

export const actorApi = createApi({
  reducerPath: 'actorApi',

  baseQuery: fetchBaseQueryApi(),

  endpoints: (builder: EndpointBuilder<BaseQueryFn, string, string>) => ({
    getActors: builder.query<ActorFormValues[], void>({
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

    getSingleActor: builder.query<ActorFormValues, number>({
      query: (id) => ({ url: `actors/${id}`, method: 'get' }),

      // @ts-ignore
      transformResponse: (data: Actor) => ({ ...data, hobbies: data.hobbies.join(', ') }),

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

    updateActor: builder.mutation({
      query: (actor: Actor) => ({
        url: `/actors/${actor.id}`,
        method: 'patch',
        data: actor,
      }),
      invalidatesTags: ['actors'],
    }),

    deleteActor: builder.mutation({
      query: (id) => ({
        url: `/actors/${id}`,
        method: 'delete',
      }),

      invalidatesTags: ['actors'],
    }),

    resetActors: builder.query<Actor[], void>({
      query: () => ({ url: '/reset', method: 'get' }),

      providesTags: ['actors'],
    }),
  }),
});

export const {
  useGetActorsQuery,
  useLazyGetSingleActorQuery,
  useCreateActorMutation,
  useUpdateActorMutation,
  useDeleteActorMutation,
  useLazyResetActorsQuery,
} = actorApi;
