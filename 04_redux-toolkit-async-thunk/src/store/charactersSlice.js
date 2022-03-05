import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
};

const ENDPOINT = "https://star-wars-characters.glitch.me/api/search/";
export const fetchCharacterFromAPI = createAsyncThunk(
  "characters/fetchCharacters",
  async (searchTerm) => {
    const response = await fetch(ENDPOINT + searchTerm).then((res) =>
      res.json()
    );
    return response.results;
  }
);
export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    add: (state, action) => {
      state.characters = action.payload;
    },
  },
  extraReducers: {
    [fetchCharacterFromAPI.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [fetchCharacterFromAPI.pending]: (state, action) => {
      state.loading = true;
    },
  },
});
