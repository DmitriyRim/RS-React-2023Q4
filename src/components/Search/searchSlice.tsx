import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface SearcSlice {
  value: string;
}

const initialState = { value: localStorage.getItem('search') || '' };

export const searcSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<SearcSlice>) {
      console.log(state, action);

      state.value = action.payload.value;
    },
  },
});

export const { setSearchQuery } = searcSlice.actions;
export default searcSlice.reducer;
