

import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "../components/layout/DashboardLayout";

import Analyze from "./Analyze";
import Settings from "./Settings";
import History from "./History";


export default function Dashboard() {
  return (
    <DashboardLayout>

      <Routes>


        <Route path="/" element={<Navigate to="analyze"/>} />
        <Route path="/analyze" element={<Analyze />} />
        <Route path="/history" element={<History />} />
        <Route path="/settings" element={<Settings />} />


      </Routes>
    </DashboardLayout>
  )
}