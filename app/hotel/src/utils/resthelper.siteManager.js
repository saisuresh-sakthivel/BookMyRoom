/**
 * @todo Should use the environment based API endpoint.
 *
 */

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchHotels = createAsyncThunk(
  "hotelManager/fetchHotels",
  async (param) => {
    console.log("param" + param);
    try {
      const response = await axios.get("http://localhost:5050/hotels/" + param);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
