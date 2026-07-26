import React from "react";
import { Routes, Route, } from "react-router-dom";

import LoginPage from "../pages/Auth/LoginPage";
import { ROUTES } from "./constants";
import Signup from "../pages/Auth/SignupPage";
import OtpVerificationPage from "../pages/Auth/VerifyOtpPage";
import ForgotPassword from "../pages/Auth/ForgotPassword";
const AppRoutes: React.FC = () => {
  return (
    <Routes>

      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.SIGNUP} element={<Signup />} />
      <Route path={ROUTES.VERIFYOTP} element={<OtpVerificationPage/>} />
      <Route path={ROUTES.FORGOTPASSWORD} element={<ForgotPassword/>} />

  
   
    </Routes>
  );
};

export default AppRoutes;
