import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import notificationSlice from "./notificationSlice";
import projectSlice from "./projectSlice";
import userSlice from "./userSlice";

export const store = configureStore({
    reducer:{
        auth:authSlice,
        notification: notificationSlice,
        project: projectSlice,
        user: userSlice
    }
})