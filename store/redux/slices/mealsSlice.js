import { createSlice } from "@reduxjs/toolkit"
import { CATEGORIES, MEALS } from "../../../data/dummy-data"

const initialState = {
  categories: CATEGORIES,
  meals: MEALS,
}
export const mealsSlice = createSlice({
  name: "mealsData",
  initialState,
  reducers: {
    reset: () => initialState,
  },
})

export default mealsSlice.reducer
