import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Login from '../pages/Login';
import MainLayout from '../layouts/MainLayout';
import StateManage from '../pages/StateManage';
import LoginTest from '../pages/StateeManage'; // check this path is correct
import Register from '../pages/Register';
import GuestRouter from './GuestRouter';
import NormalUserRoute from './NormalUserRoute';
import ProductManagement from '../pages/admin/ProductManagement';
import AdminLayout from '../layouts/AdminLayout';

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/state-test' element={<StateManage />} />
                <Route path='/login-test' element={<LoginTest />} />

                {/* Public Routes with MainLayout */}
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Homepage />} />

                    {/* Guest Only Routes */}
                    <Route element={<GuestRouter />}>
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                    </Route>
                </Route>

                {/* Normal User Routes */}
                <Route path="/normal/*" element={<NormalUserRoute />}>
                    <Route path="order" element={<>My order</>} />
                    <Route path="cart" element={<>My cart</>} />
                    <Route path="*" element={<>404 not found</>} />
                </Route>

                {/* Admin Routes with Admin Layout */}
                <Route element={<AdminLayout />}>
                    <Route path="/admin/*">
                        <Route path="product" element={<ProductManagement />} />
                        {/* You can add more like below */}
                        {/* <Route path="dashboard" element={<AdminDashboard />} />
                        <Route path="users" element={<AdminUsers />} /> */}
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
