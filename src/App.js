import React, { useState } from "react";
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import NewEntry from "./pages/NewEntry";

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/sign-up" element={<SignUp/>}/>
                <Route path="/" element={<Login/>}/>
                <Route path="/new-entry" element={<NewEntry/>}/>

            </Routes>
        </BrowserRouter>
    )
}

export default App;