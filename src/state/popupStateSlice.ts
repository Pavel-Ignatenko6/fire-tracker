import { createSlice } from "@reduxjs/toolkit";

export const popupStateSlice = createSlice({
    name: "popupState",
    initialState: {
        isOpen: false,
    },
    reducers: {
        openPopup: (state) => {
            state.isOpen = true;
        },
        closePopup: (state) => {
            state.isOpen = false;
        }
    },
});

export const { openPopup, closePopup } = popupStateSlice.actions;
export default popupStateSlice.reducer

export const popupStateValue = (state: any): boolean => state.popupState.isOpen