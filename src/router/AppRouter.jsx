
// Importanciones

import { BrowserRouter, Routes, Route } from "react-router-dom";


import Landing from "../pages/Landing"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Dashboard from "../pages/Dashboard"




export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                {/* PUBLIC */}
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* DASHBOARD */}
                <Route path="/dashboard/*" element={<Dashboard />} />
              
            </Routes>
        </BrowserRouter>
    )
}