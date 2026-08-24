import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { ROUTES } from "../../app-routes/constants";
import AuthApi from "../../services/AuthApi";
import type { RootState } from "../../redux/store";
import { Role } from "../../enums/Role";
import { CloseIcon } from "../../svg";

const NavItem: React.FC<{ to: string; label: string; onClick?: () => void }> = ({ to, label, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-gray-200 hover:bg-yellow-500/10 cursor-pointer ${
        isActive ? "bg-yellow-500/10 ring-1 ring-yellow-500/20 text-white" : ""
      }`
    }
  >
    <span className="w-5 h-5 flex items-center justify-center text-yellow-400">●</span>
    <span className="text-sm font-medium">{label}</span>
  </NavLink>
);

const Sidebar: React.FC<{ onClose?: () => void; hideHeader?: boolean; fullWidth?: boolean }> = ({ onClose, hideHeader, fullWidth }) => {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.auth.user);
  const authApi = new AuthApi();

  const handleLogout = async () => {
    try {
      await authApi.logout();
      toast.success("Logged out successfully");
    } catch (error) {
      console.error("Logout failed", error);
      toast.error("Logout failed. Please try again.");
    } finally {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("persist:root");
      navigate(ROUTES.HOME);
    }
  };

  return (
<div
  className={`${fullWidth ? "w-full" : "w-64"} sticky top-0 h-screen bg-[#0f1724] ${fullWidth ? "border-none" : "border-r border-gray-800"} p-4 flex flex-col`}
>
      {!hideHeader && (
        <div className="mb-8 flex items-center gap-3 px-2">
          <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-yellow-400 to-amber-600 flex items-center justify-center text-black font-bold">S</div>
          <div className="ml-auto md:hidden">
            {onClose && (
              <button onClick={onClose} aria-label="Close menu" className="text-gray-300 p-2 cursor-pointer">
                <CloseIcon className="h-5 w-5" />
              </button>
            )}
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Salwa Trading</div>
            <div className="text-xs text-gray-400">Dashboard</div>
          </div>
        </div>
      )}

      <nav className="flex-1 space-y-1">
        <NavItem to={ROUTES.DASHBOARD} label="Dashboard" onClick={onClose} />
        <NavItem to={ROUTES.REFERRALS} label="Referrals" onClick={onClose} />
        {user?.role === Role.ADMIN && (
          <div className="rounded-3xl border border-yellow-500/10 bg-yellow-500/5 p-3">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-300">
              <span>Admin</span>
            </div>
            <div className="space-y-1">
              <NavItem to={ROUTES.ADMIN_DASHBOARD} label="Admin Dashboard" onClick={onClose} />
              <NavItem to={ROUTES.ADMIN_REQUESTS} label="Pending Requests" onClick={onClose} />
              <NavItem to={ROUTES.ADMIN_PAYMENTS} label="Payment Request" onClick={onClose} />
            </div>
          </div>
        )}

        {user?.role !== Role.ADMIN && (
          <>
            <div className="mt-4 border-t border-gray-800 pt-3 text-xs text-gray-400 px-4">Investments</div>

            <NavItem to={ROUTES.MEDICAL_INVESTMENT} label="Medical Investment" onClick={onClose} />
            <NavItem to={ROUTES.PROPERTY_INVESTMENT} label="Property Investment" onClick={onClose} />
            <NavItem to={ROUTES.TRADING_INVESTMENT} label="Trading Investment" onClick={onClose} />
          </>
        )}
      </nav>

      <div className="mt-4 border-t border-gray-800 pt-4 ">
        <button
          type="button"
          onClick={handleLogout}
          className="flex w-full items-center gap-3 cursor-pointer rounded-lg px-4 py-3 text-left text-sm font-medium text-red-400 transition hover:bg-red-500/10 hover:text-red-300"
        >
          <span className="flex h-5 w-5 items-center justify-center">⎋</span>
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
