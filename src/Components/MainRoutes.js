import React from "react";
import { Route, Routes } from "react-router-dom";
import ActivityLog from "../Pages/ActivityLog";
import Home from "../Pages/Home";
import Report from "../Pages/Report";

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/report" element={<Report />} />
            <Route path="/acitivity-log" element={<ActivityLog />} />
        </Routes>
    );
}
