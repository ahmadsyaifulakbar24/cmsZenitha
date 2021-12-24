import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DashboardTemplate from '../components/DashboardTemplate'
import Login from '../views/auth/Login'
import Dashboard from '../views/dashboard'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route 
                    path="/" 
                    element={<Login />} 
                />
                <Route 
                    path="/dashboard"
                    element={
                        <DashboardTemplate
                            render={<Dashboard />} 
                            title="Dashboard"
                        />
                    } 
                />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
