import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import './Main.css'
import Chat from "./pages/Chat";
import NewPost from "./pages/NewPost";

const Main = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/posts' element={<Chat/>}></Route>
            <Route path='/posts/new' element={<NewPost/>}></Route>
            <Route path='/posts/:postId/edit' element={<NewPost/>}></Route>
        </Routes>
    );
}

export default Main;