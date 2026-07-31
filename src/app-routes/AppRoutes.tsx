import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { ROUTES } from "./constants";

import LoginPage from "../pages/auth/LoginPage";
import Signup from "../pages/auth/SignupPage";
import ProfilePage from "../pages/auth/ProfilePage";
import OtpVerificationPage from "../pages/auth/VerifyOtpPage";
import ForgotPassword from "../pages/auth/ForgotPassword";
// import ResetPasswordPage from "../pages/auth/ResetPassword";
import DashboardPage from "../pages/dashboard/DashboardPage";
import Packages from "../pages/packages/Packages";
import PackageDetails from "../pages/packagedetails/PackageDetails";
import Layout from "../components/layout/Layout";
import ResetPasswordPage from "../pages/auth/ResetPassword";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={ROUTES.LOGIN} replace />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.SIGNUP} element={<Signup />} />
      <Route path={ROUTES.VERIFYOTP} element={<OtpVerificationPage />} />
      <Route path={ROUTES.RESET_PASSWORD} element={<ResetPasswordPage/>} />
      <Route path={ROUTES.FORGOTPASSWORD} element={<ForgotPassword />} />
      <Route path={ROUTES.DASHBOARD} element={<Layout><DashboardPage /></Layout>} />
      <Route path={ROUTES.PROFILEPAGE} element={<ProfilePage />} />
      <Route path={ROUTES.PACKAGES} element={<Packages />} />
      <Route path={ROUTES.PACKAGE_DETAILS} element={<PackageDetails />} />
    </Routes>
  );
};

export default AppRoutes;