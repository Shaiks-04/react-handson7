import React from "react";
import {Routes,Route} from "react-router-dom";
import Home from "../pages/home";
import Student from "../pages/student";
import ContactUs from "../pages/contactus";
import AddNewStudent from "../pages/AddNewStudent";
import EditDetails from "../pages/EditDetail";

function RouterComponent(){
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/student" element={<Student/>} />
            <Route path="/contactUs" element={<ContactUs/>} />
            <Route path="/AddNewStudent" element={<AddNewStudent/>} />
            <Route path="/EditDetails" element={<EditDetails/>} />
        </Routes>
    )
}

export default RouterComponent;