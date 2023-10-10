import { PayloadAction, createSlice } from "@reduxjs/toolkit";


export interface UserInterface {
    token?: string,
    user?: {
        avatar?: string,
        id?: number,
        name?: string,
        email?: string,
        password?: string,
        created_at?: string,
        updated_at?: string,
    }
}

const initialState: UserInterface = {}


export const authSlice = createSlice({
    initialState,
    name: "auth",
    reducers: {
        authUser: (state: UserInterface, action: PayloadAction<UserInterface>) => {
            return action.payload
        }
    }
})

export const { authUser } = authSlice.actions

export default authSlice.reducer