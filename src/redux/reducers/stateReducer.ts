import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export const EyeState = createSlice({
    name: 'EyeState',
    initialState: true,
    reducers: {
        setIsTrueOrFalse(state, action: PayloadAction<boolean>) {
            return action.payload
        }
    }
})

export const { setIsTrueOrFalse } = EyeState.actions
export default EyeState.reducer