// src/components/PrivateRoute.jsx
import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoute = ({ roles, requiresSetup = false }) => {
    const token = localStorage.getItem('token');
    const userRole = token ? JSON.parse(atob(token.split('.')[1])).role : null;
    const location = useLocation();

    // Check if the user is authenticated
    if (!token) {
        return <Navigate to="/login" />;
    }

    // Check if the user has the required role
    if (roles && roles.length > 0 && !roles.includes(userRole)) {
        return <Navigate to="/" />;
    }

    // Check for ProfileSetup access
    if (requiresSetup && (!location.state || !location.state.fromSignUp)) {
        return <Navigate to="/" />;
    }

    return <Outlet />;
};

export default PrivateRoute;