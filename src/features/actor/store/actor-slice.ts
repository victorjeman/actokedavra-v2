import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ActorState {
  activeActorId: number | null;
  selectedActorIds: number[];
  isFormVisible: boolean;
}

const initialState: ActorState = {
  activeActorId: null,
  selectedActorIds: [],
  isFormVisible: false,
};

export const actorSlice = createSlice({
  name: 'actor',
  initialState,

  reducers: {
    setActiveActorAction: (state, action: PayloadAction<number | null>) => {
      state.activeActorId = action.payload;
    },

    setSelectedActorsAction: (state, action: PayloadAction<number>) => {
      const actorId = action.payload;

      if (state.selectedActorIds.includes(actorId)) {
        const indexToDelete = state.selectedActorIds.findIndex((id) => id === actorId);

        state.selectedActorIds.splice(indexToDelete, 1);
      } else {
        state.selectedActorIds.push(actorId);
      }
    },

    setIsFormVisible: (state, action: PayloadAction<boolean>) => {
      state.isFormVisible = action.payload;
    },
  },
});

export const { setActiveActorAction, setSelectedActorsAction, setIsFormVisible } =
  actorSlice.actions;
export const actorReducer = actorSlice.reducer;
