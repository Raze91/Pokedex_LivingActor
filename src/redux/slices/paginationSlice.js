import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
    name: "pagination",
    initialState: {
        prev: null,
        next: null,
    },
    reducers: {
        setPagination: (state, action) => {
            state.prev = action.payload.prev;
            state.next = action.payload.next;
        },
    },
});

export const { setPagination } = paginationSlice.actions;

export default paginationSlice.reducer;
