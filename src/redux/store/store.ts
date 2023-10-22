import { configureStore } from '@reduxjs/toolkit'
import setIsTrueOrFalse from '@redux/reducers/stateReducer'
import setIsTrue from '@redux/reducers/ModalVisible'
import authSlice from '@redux/reducers/auth'
import accountReducer from '@redux/reducers/accountReducer'
import att from '@redux/reducers/att'

export const store = configureStore({
  reducer: {
    EyeState: setIsTrueOrFalse,
    ModalVisible: setIsTrue,
    Auth: authSlice,
    Account: accountReducer,
    Att: att,
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch