import React, { useState } from "react";
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import SignUp from "./pages/SignUp";

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/sign-up" element={<SignUp/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;