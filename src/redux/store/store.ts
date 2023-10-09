import { configureStore } from '@reduxjs/toolkit'
import setIsTrueOrFalse from '@redux/reducers/stateReducer'
import setIsTrue from '@redux/reducers/ModalVisible'
import authSlice from '@redux/reducers/auth'

export const store = configureStore({
  reducer: {
    EyeState: setIsTrueOrFalse,
    ModalVisible: setIsTrue,
    Auth: authSlice,
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch