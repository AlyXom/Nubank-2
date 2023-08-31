import { configureStore } from '@reduxjs/toolkit'
import setIsTrueOrFalse from '@redux/reducers/stateReducer'
import setIsTrue from '@redux/reducers/ModalVisible'

export const store = configureStore({
  reducer: {
    EyeState: setIsTrueOrFalse,
    ModalVisible: setIsTrue,
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch