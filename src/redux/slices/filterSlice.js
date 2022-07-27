import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    platformId: 0,
    sortName: {
        name: 'Name (A=>Z)', orderName: 'name'
    }
}

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setPlatformId(state, action) {
            state.platformId = action.payload
        },
        setSortName(state, action) {
            state.sortName = action.payload
        }
    }
})

export const { setPlatformId, setSortName } = filterSlice.actions

export default filterSlice.reducer