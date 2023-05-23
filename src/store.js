import { configureStore } from "@reduxjs/toolkit";
import StudentReducer from "./feature/StudentSlice";

export default configureStore({
    reducer:{
        student:StudentReducer
    }
})