import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Actor } from 'features/actor/types/actor-types';

interface ActorState {
  activeActor: Actor | null;
  selectedActors: number[];
}

const initialState: ActorState = {
  activeActor: { name: '!!!' },
  selectedActors: [],
};

export const actorSlice = createSlice({
  name: 'actor',
  initialState,

  reducers: {
    setActiveActorAction: (state, action: PayloadAction<Actor | null>) => {
      state.activeActor = action.payload;
    },

    setSelectedActorsAction: (state, action: PayloadAction<number[] | null>) => {
      state.selectedActors = action.payload;
    },
  },
});

export const { setActiveActorAction, setSelectedActorsAction } = actorSlice.actions;
export const actorReducer = actorSlice.reducer;
