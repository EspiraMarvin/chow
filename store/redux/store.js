import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"

import mealsReducer from "./slices/mealsSlice"
import favoritesReducer from "./slices/favoritesSlice"

const customMiddleware = getDefaultMiddleware({
  serializableCheck: false,
})
export const store = configureStore({
  reducer: {
    mealsData: mealsReducer,
    favoriteMeals: favoritesReducer,
  },
  middleware: customMiddleware,
})
