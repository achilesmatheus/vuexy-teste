// ** Redux Imports
import rootReducer from "./rootReducer"
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false
    })
  }
})

console.log(rootReducer)
export { store }
