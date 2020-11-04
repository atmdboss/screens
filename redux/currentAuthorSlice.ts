import { createSlice } from '@reduxjs/toolkit';

const currentAuthorSlice = createSlice({
  name: 'currentAuthor',
  initialState: 0,
  reducers: {
    setAuthorId: (state, action) => action.payload,
  },
});

export const { setAuthorId } = currentAuthorSlice.actions;
export default currentAuthorSlice;
