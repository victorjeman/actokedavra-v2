import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Actor } from 'features/actor/types/actor-types';

interface ActorState {
  activeActor: Actor | null;
  selectedActors: number[];
  isFormVisible: boolean;
}

const initialState: ActorState = {
  activeActor: null,
  selectedActors: [],
  isFormVisible: false,
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

    setIsFormVisible: (state, action: PayloadAction<boolean>) => {
      state.isFormVisible = action.payload;
    },
  },
});

export const { setActiveActorAction, setSelectedActorsAction, setIsFormVisible } =
  actorSlice.actions;
export const actorReducer = actorSlice.reducer;
