import { createSlice } from "@reduxjs/toolkit"

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    ids: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.ids.push(action.payload.id)
    },
    removeFavorite: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1)
      // method 2
      //   state.ids.splice(state.ids.findIndex((id) => id !== action.payload.id),1)
      // method 3, without mutability
      //   state.ids = state.ids.filter((id) => id !== action.payload.id)
    },
  },
})

// actions
export const { addFavorite, removeFavorite } = favoritesSlice.actions

// reducer
export default favoritesSlice.reducer
