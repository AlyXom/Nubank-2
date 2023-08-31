import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";


export const ModalVisible = createSlice({
    name: 'ModalVisible',
    initialState: false,
    reducers: {
        setIsTrueOrFalse(state, action: PayloadAction<boolean>) {
            return action.payload
        }
    }
})

export const { setIsTrueOrFalse } = ModalVisible.actions
export default ModalVisible.reducer