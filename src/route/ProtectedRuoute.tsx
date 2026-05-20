import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import type { AppRootState } from "@/store/store";

interface ProtectedRouteProps {
  roles?: string[];
}

const ProtectedRoute = ({ roles }: ProtectedRouteProps) => {
  const { token, role } = useSelector(
    (state: AppRootState) => state.auth
  );

  // not logged in
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // role check
  if (roles && !roles.includes(role)) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;