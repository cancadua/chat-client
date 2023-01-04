import React, {Suspense, lazy} from 'react'
import {Route, Routes} from 'react-router-dom'
const Home = lazy(() => import('./pages/Home'));
const Chat = lazy(() => import('./pages/Chat'));
const NewPost = lazy(() => import('./pages/NewPost'));



import './Main.css'


const Main = () => {
    return (
        <Suspense fallback={<div style={{
            display: "flex",
            width: "100%",
            padding: "3rem",
            justifyContent: "center",
            alignContent: "center",
            }}>Loading...</div>}>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/posts' element={<Chat/>}></Route>
                <Route path='/posts/new' element={<NewPost/>}></Route>
                <Route path='/posts/:postId/edit' element={<NewPost/>}></Route>
            </Routes>
        </Suspense>
    );
}

export default Main