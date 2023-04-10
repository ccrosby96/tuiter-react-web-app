import { createSlice } from "@reduxjs/toolkit";
import profileArray from "../profile/profile.json";

const ProfileSlice = createSlice({
    name: "profile",
    initialState: profileArray,

    reducers: {
        updateProfile(state, action) {
            const index = 0
            state[index] = action.payload
        }
    }
});
export const {updateProfile} = ProfileSlice.actions;
export default ProfileSlice.reducer;