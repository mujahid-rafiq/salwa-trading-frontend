import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/Auth/LoginPage";
import SignupPage from "./pages/Auth/SignupPage";
import { ROUTES } from "./app-routes/constants";
import ProfilePage from "./pages/Auth/ProfilePage";
import OtpVerificationPage from "./pages/Auth/VerifyOtpPage";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import Layout from "./components/Layout/Layout";
import DashboardPage from "./pages/Dashboard/DashboardPage";
// import { ROUTES } from "./routes/routes";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={ROUTES.LOGIN} replace />} />

      <Route
        path={ROUTES.LOGIN}
        element={<LoginPage />}
      />

      <Route
        path={ROUTES.SIGNUP}
        element={<SignupPage />}
      />

       <Route
        path={ROUTES.DASHBOARD}
        element={<Layout><DashboardPage/></Layout>}
      />

       <Route
        path={ROUTES.PROFILEPAGE}
        element={<ProfilePage/>}
      />

       <Route
        path={ROUTES.VERIFYOTP}
        element={<OtpVerificationPage/>}
      />

      <Route
        path={ROUTES.FORGOTPASSWORD}
        element={<ForgotPassword />}
      />
    </Routes>
  );
};

export default App;