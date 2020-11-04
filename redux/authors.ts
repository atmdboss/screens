import { createSlice } from '@reduxjs/toolkit';

const authorsSlice = createSlice({
  name: 'authors',
  initialState: [] as Author[],
  reducers: {
    setAuthors: (state, action) => action.payload,
  },
});

export const { setAuthors } = authorsSlice.actions;
export default authorsSlice;
