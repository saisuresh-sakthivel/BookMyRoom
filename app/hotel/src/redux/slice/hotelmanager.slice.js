import { createSlice } from "@reduxjs/toolkit";
import { fetchHotels } from "../../utils/resthelper.siteManager";

const initialState = {
  hotels: [],
};
const hotelmanager = createSlice({
  name: "hotelmanager",
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHotels.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHotels.fulfilled, (state, action) => {
        state.loading = false;
        state.hotels = action.payload;
        console.log("hotels ==== " + JSON.stringify(state.hotels));
      })
      .addCase(fetchHotels.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred";
      });
  },
});
//export const { openDialog, closeDialog } = sitemanager.actions;
export default hotelmanager.reducer;
