import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { ROUTES } from "./constants";

import LoginPage from "../pages/Auth/LoginPage";
import Signup from "../pages/Auth/SignupPage";
import ProfilePage from "../pages/Auth/ProfilePage";
import OtpVerificationPage from "../pages/Auth/VerifyOtpPage";
import ForgotPassword from "../pages/Auth/ForgotPassword";
// import ResetPasswordPage from "../pages/Auth/ResetPassword";
import DashboardPage from "../pages/Dashboard/DashboardPage";
import AdminDashboardPage from "../pages/Dashboard/AdminDashboardPage";
import AdminRequestsPage from "../pages/admin/AdminRequestsPage";
import Packages from "../pages/Packages/Packages";
import PackageDetails from "../pages/PackageDetails/PackageDetails";
import Layout from "../components/Layout/Layout";
import ResetPasswordPage from "../pages/Auth/ResetPassword";
import RequireAuth from "../components/auth/RequireAuth";
import RequireRole from "../components/auth/RequireRole";
import { Role } from "../enums/Role";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={ROUTES.LOGIN} replace />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.SIGNUP} element={<Signup />} />
      <Route path={ROUTES.VERIFYOTP} element={<OtpVerificationPage />} />
      <Route path={ROUTES.RESET_PASSWORD} element={<ResetPasswordPage/>} />
      <Route path={ROUTES.FORGOTPASSWORD} element={<ForgotPassword />} />
      <Route
        path={ROUTES.DASHBOARD}
        element={
          <RequireAuth>
            <Layout>
              <DashboardPage />
            </Layout>
          </RequireAuth>
        }
      />
      <Route
        path={ROUTES.ADMIN_DASHBOARD}
        element={
          <RequireAuth>
            <RequireRole role={Role.ADMIN}>
              <Layout>
                <AdminDashboardPage />
              </Layout>
            </RequireRole>
          </RequireAuth>
        }
      />
      <Route
        path={ROUTES.ADMIN_REQUESTS}
        element={
          <RequireAuth>
            <RequireRole role={Role.ADMIN}>
              <Layout>
                <AdminRequestsPage />
              </Layout>
            </RequireRole>
          </RequireAuth>
        }
      />
      <Route path={ROUTES.PROFILEPAGE} element={<RequireAuth><ProfilePage /></RequireAuth>} />
      <Route path={ROUTES.PACKAGES} element={<RequireAuth><Packages /></RequireAuth>} />
      <Route path={ROUTES.PACKAGE_DETAILS} element={<RequireAuth><PackageDetails /></RequireAuth>} />
    </Routes>
  );
};

export default AppRoutes;