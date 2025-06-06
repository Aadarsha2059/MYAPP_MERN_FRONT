import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import Login from '../pages/Login'
import MainLayout from '../layouts/MainLayout'
import StateManage from '../pages/StateManage'
import LoginTest from '../pages/StateeManage'
import Register from '../pages/Register'

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/state-test' element={<StateManage />}></Route>
                <Route path='/login-test' element={<LoginTest />}></Route>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Homepage />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                </Route>

                    <Route path="/" element={<Homepage />}></Route>
            </Routes>


        </BrowserRouter>
    )
}

// task
//in login page
// make 2 link
// go back- routes to homepage
//register 