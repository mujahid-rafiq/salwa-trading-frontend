import React from "react";
import { Routes, Route } from "react-router-dom";

import { ROUTES } from "./constants";


import AdminRequestsPage from "../pages/admin/AdminRequestsPage";
import AdminPaymentsPage from "../pages/admin/AdminPaymentsPage";
import Packages from "../pages/Packages/Packages";
import PackageDetails from "../pages/PackageDetails/PackageDetails";
import MedicalInvestmentPage from "../pages/investments/MedicalInvestmentPage";
import PropertyInvestmentPage from "../pages/investments/PropertyInvestmentPage";
import TradingInvestmentPage from "../pages/investments/TradingInvestmentPage";

import RequireAuth from "../components/auth/RequireAuth";
import RequireRole from "../components/auth/RequireRole";
import { Role } from "../enums/Role";

import WithdrawPage from "../pages/withdraw/WithdrawPage";
// import ResetPasswordPage from "../pages/auth/ResetPassword";
import Layout from "../components/Layout/Layout";

import LoginPage from "../pages/Auth/LoginPage";
import ProfilePage from "../pages/Auth/ProfilePage";
import ResetPasswordPage from "../pages/Auth/ResetPassword";
import OtpVerificationPage from "../pages/Auth/VerifyOtpPage";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import DashboardPage from "../pages/Dashboard/DashboardPage";
import AdminDashboardPage from "../pages/Dashboard/AdminDashboardPage";
import Signup from "../pages/Auth/SignupPage";
import LandingPage from "../pages/Landing/LandingPage";
import ReferralPage from "../pages/Dashboard/ReferralPage";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<LandingPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage/>} />
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
      <Route
        path={ROUTES.ADMIN_PAYMENTS}
        element={
          <RequireAuth>
            <RequireRole role={Role.ADMIN}>
              <Layout>
                <AdminPaymentsPage />
              </Layout>
            </RequireRole>
          </RequireAuth>
        }
      />
      <Route path={ROUTES.PROFILEPAGE} element={<RequireAuth><ProfilePage /></RequireAuth>} />
      <Route path={ROUTES.PACKAGES} element={<RequireAuth><Packages /></RequireAuth>} />
      <Route path={ROUTES.WITHDRAW} element={<RequireAuth><Layout><WithdrawPage /></Layout></RequireAuth>} />
      <Route path={ROUTES.REFERRALS} element={<RequireAuth><Layout><ReferralPage /></Layout></RequireAuth>} />
      <Route path={ROUTES.MEDICAL_INVESTMENT} element={
        <RequireAuth>
          <Layout>
            <MedicalInvestmentPage />
          </Layout>
        </RequireAuth>
      } />
      <Route path={ROUTES.PROPERTY_INVESTMENT} element={
        <RequireAuth>
          <Layout>
            <PropertyInvestmentPage />
          </Layout>
        </RequireAuth>
      } />
      <Route path={ROUTES.TRADING_INVESTMENT} element={
        <RequireAuth>
          <Layout>
            <TradingInvestmentPage />
          </Layout>
        </RequireAuth>
      } />
      <Route path={ROUTES.PACKAGE_DETAILS} element={<RequireAuth><PackageDetails /></RequireAuth>} />
      <Route path={ROUTES.WITHDRAW} element={<RequireAuth><Layout><WithdrawPage /></Layout></RequireAuth>} />
    </Routes>
  );
};

export default AppRoutes;