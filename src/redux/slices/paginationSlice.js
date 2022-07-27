import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pageSize: 8
}

const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setPageSize(state, action) {
            state.pageSize = action.payload
        }
    }
})

export const { setPageSize } = paginationSlice.actions

export default paginationSlice.reducer