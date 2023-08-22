import { configureStore } from '@reduxjs/toolkit'
import setIsTrueOrFalse from '@redux/reducers/stateReducer'

export const store = configureStore({
  reducer: {
    EyeState: setIsTrueOrFalse
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch