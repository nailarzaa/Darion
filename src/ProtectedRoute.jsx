import { Navigate, Outlet } from "react-router-dom";

const AdminRoute = () => {
    const isLoggedIn = !!localStorage.getItem("authToken");

    return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};

export default AdminRoute;
