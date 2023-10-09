import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";




const initialState = {}

export const authSlice = createSlice({
    initialState,
    name: "auth",
    reducers: {
        auth(state, action: PayloadAction) {
            return action.payload
        }
    }
})

export const { auth } = authSlice.actions

export default authSlice.reducer