import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";


export interface Account {
    amount?: number,
    credit_card?: number,
    id?: number,
    invoice_amount?: number,
    invoice_closing?: number,
    loan?: number,
    payment_data?: number,
    user_id?: number,
}

const initialState: Account = {}


export const accountReducer = createSlice({
    initialState,
    name: 'account',
    reducers: {
        accountState: (state: Account, action: PayloadAction<Account>) => {
            return action.payload
        }
    }
})

export const { accountState } = accountReducer.actions
export default accountReducer.reducer