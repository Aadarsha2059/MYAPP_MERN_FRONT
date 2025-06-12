import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import Login from '../pages/Login'
import MainLayout from '../layouts/MainLayout'
import StateManage from '../pages/StateManage'
import LoginTest from '../pages/StateeManage'
import Register from '../pages/Register'
import GuestRouter from './GuestRouter'
import NormalUserRoute from './NormalUserRoute'
import ProductManagement from '../pages/admin/ProductManagement'

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/state-test' element={<StateManage />}></Route>
                <Route path='/login-test' element={<LoginTest />}></Route>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Homepage />}></Route>

                    <Route element={<GuestRouter/>}>


                    <Route path="/register" element={<Register />}></Route>
                    <Route path="/login" element={<Login />}></Route>

                    </Route>
                    
                </Route>

                    <Route path="/" element={<Homepage />}></Route>

                    <Route path='/normal/*' element={<NormalUserRoute/>}>
                    <Route path='order' element={<>My order</>}></Route>
                    <Route path='cart' element={<>My cart</>}></Route>
                    <Route path='*' element={<>404 not found</>}></Route>

                    </Route>

                    <Route path='/admin/*'>
                          <Route path='product' element={<ProductManagement/>}></Route>
                    </Route>

                    {/* {/*make a layout for admin , make header and add logout, make a route protection for admin make 4 routes /admin/dashboard/ admin/users/ admin/products} */}

            </Routes>


        </BrowserRouter>
    )
}

// task
//in login page
// make 2 link
// go back- routes to homepage
//register 