
// Importanciones

import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardLayout from "../components/layout/DashboardLayout";

import Landing from "../pages/Landing"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Dashboard from "../pages/Dashboard"
import Analyze from "../pages/Analyze";
import History from "../pages/History";
import Settings from "../pages/Settings";



export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                {/* PUBLIC */}
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* DASHBOARD */}
                <Route path="/dashboard" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
                <Route path="/analyze" element={<DashboardLayout><Analyze /></DashboardLayout>} />
                <Route path="/history" element={<DashboardLayout><History /></DashboardLayout>} />
                <Route path="/settings" element={<DashboardLayout><Settings /></DashboardLayout>} />

            </Routes>
        </BrowserRouter>
    )
}