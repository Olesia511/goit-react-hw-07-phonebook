import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchingError, fetchingInProgress, fetchingSuccess } from "./contactsSlice";

axios.defaults.baseURL = "<https://657ca06c853beeefdb99bc7a.mockapi.io>";

// https://657ca06c853beeefdb99bc7a.mockapi.io/contacts/:endpoint

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        const response = await axios.get("/contacts");
        console.log(`response`, response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
});


