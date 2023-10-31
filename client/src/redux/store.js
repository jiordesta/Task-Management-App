import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import notificationSlice from "./notificationSlice";
import projectSlice from "./projectSlice";

export const store = configureStore({
    reducer:{
        auth:authSlice,
        notification: notificationSlice,
        project: projectSlice
    }
})