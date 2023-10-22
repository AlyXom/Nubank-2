import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const att = createSlice({
    name: 'att',
    initialState: false,
    reducers: {
        setAtt(state, action: PayloadAction<boolean>) {
            return action.payload
        }
    }
})

export const { setAtt } = att.actions
export default att.reducer