import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import type { RootState } from "../../redux/store";
import { ROUTES } from "../../app-routes/constants";
import { Role } from "../../enums/Role";

const RequireRole: React.FC<{ children: React.ReactNode; role: Role }> = ({ children, role }) => {
  const user = useSelector((state: RootState) => state.auth.user);

  if (!user) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  if (user.role !== role) {
    return <Navigate to={ROUTES.DASHBOARD} replace />;
  }

  return <>{children}</>;
};

export default RequireRole;
