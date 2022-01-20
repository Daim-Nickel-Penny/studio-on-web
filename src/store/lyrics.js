import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "lyrics",
  initialState: {
    lyrics: null,
  },
  reducers: {
    lyricsSuccess: (state, action) => {
      state.lyrics = action.payload;
    },
  },
});
export default slice.reducer;

const { lyricsSuccess } = slice.actions;

export const lyrics =
  ({ lyricsText }) =>
  async (dispatch) => {
    try {
      dispatch(lyricsSuccess({ lyricsText }));
    } catch (e) {
      return console.error(e.message);
    }
  };
