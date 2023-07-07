import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        permission: ['1','2','3'],
    },
    reducers: {
        setState: (state, action) => {
            return { ...state, ...action.payload }
        }
    }
})

export const { setState } = appSlice.actions;
export default appSlice.reducer;
