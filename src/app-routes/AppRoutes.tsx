import React from "react";
import { Routes, Route } from "react-router-dom";

import { ROUTES } from "./constants";

import LoginPage from "../pages/Auth/LoginPage";
import Signup from "../pages/Auth/SignupPage";
import OtpVerificationPage from "../pages/Auth/VerifyOtpPage";
import ForgotPassword from "../pages/Auth/ForgotPassword";

import Packages from "../pages/Packages/Packages";
import PackageDetails from "../pages/PackageDetails/PackageDetails";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.SIGNUP} element={<Signup />} />
      <Route path={ROUTES.VERIFYOTP} element={<OtpVerificationPage />} />
      <Route path={ROUTES.FORGOTPASSWORD} element={<ForgotPassword />} />

      <Route path={ROUTES.PACKAGES} element={<Packages />} />
      <Route
        path={ROUTES.PACKAGE_DETAILS}
        element={<PackageDetails />}
      />
    </Routes>
  );
};

export default AppRoutes;