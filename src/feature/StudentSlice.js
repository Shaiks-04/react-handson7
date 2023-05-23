import { createSlice } from "@reduxjs/toolkit";
import Student from "../Data";

export const StudentSlice= createSlice({
    name:"StudentData",
    initialState:Student,
    reducers:{
        studentUpdated:(state,action)=>{
            const {id,Name,Age,Course,Batch}=action.payload;
            console.log(Student);

            const OldStudent=state.find(student=>student.id==id);
            OldStudent.Name=Name;
            OldStudent.Age=Age;
            OldStudent.Course=Course;
            OldStudent.Batch=Batch;
        },
        StudentAdded:(state,action)=>{
            state.push(action.payload);
            // console.log(Student);         
        }
    }
    
})

export const {StudentAdded,studentUpdated}=StudentSlice.actions;
export default StudentSlice.reducer;