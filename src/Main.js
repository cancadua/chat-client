import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import './Main.css'
import Chat from "./pages/Chat";

const Main = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/chat' element={<Chat/>}></Route>
        </Routes>
    );
}

export default Main;