import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ROUTES } from "../../app-routes/constants";
import AuthApi from "../../services/AuthApi";

const NavItem: React.FC<{ to: string; label: string }> = ({ to, label }) => (
  <NavLink
    to={to}
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

const ParentNavItem: React.FC<{ label: string; children: { label: string; to?: string }[] }> = ({ label, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen((s) => !s)}
        className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-lg transition-colors text-gray-200 hover:bg-yellow-500/10 cursor-pointer ${
          open ? "bg-yellow-500/10 ring-1 ring-yellow-500/20 text-white" : ""
        }`}
        aria-expanded={open}
      >
        <div className="flex items-center gap-3">
          <span className="w-5 h-5 flex items-center justify-center text-yellow-400">●</span>
          <span className="text-sm font-medium">{label}</span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 transform transition-transform ${open ? "rotate-180" : "rotate-0"}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="mt-1 ml-6 flex flex-col space-y-1">
          {children.map((c) => (
            <NavLink
              key={c.label}
              to={c.to ?? '#'}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-gray-300 text-sm hover:bg-yellow-500/5 cursor-pointer ${
                  isActive ? 'text-white font-medium' : ''
                }`
              }
            >
              {c.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
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
      navigate(ROUTES.LOGIN);
    }
  };

  return (
    <aside className="w-64 min-h-screen bg-[#0f1724] border-r border-gray-800 p-4 flex flex-col">
      <div className="mb-8 flex items-center gap-3 px-2">
        <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-yellow-400 to-amber-600 flex items-center justify-center text-black font-bold">S</div>
        <div>
          <div className="text-sm font-semibold text-white">Salwa Trading</div>
          <div className="text-xs text-gray-400">Dashboard</div>
        </div>
      </div>

      <nav className="flex-1 space-y-1">
        <NavItem to={ROUTES.DASHBOARD} label="Dashboard" />
        <NavItem to={ROUTES.SIGNUP} label="Signup" />

        <div className="mt-4 border-t border-gray-800 pt-3 text-xs text-gray-400 px-4">More</div>

        <ParentNavItem
          label="Account"
          children={[
            { label: 'Deposit' },
            { label: 'Withdraw' },
            { label: 'Internal Transfer' },
            { label: 'Ewallet Transfer' },
            { label: 'Cash - External Transfer' },
            { label: 'Bonus Summary' },
            { label: 'Activation - External Transfer' },
            { label: 'Trading bonus history' },
          ]}
        />

        <ParentNavItem
          label="Network"
          children={[{ label: 'Binary Tree' }, { label: 'Invite Link' }, { label: 'Direct referrals' }, { label: 'My Team' }]}
        />

        <ParentNavItem label="Settings" children={[{ label: 'Send PIN' }, { label: 'Change Pass&PIN' }]} />

        <ParentNavItem
          label="Reports"
          children={[
            { label: 'Deposit History' },
            { label: 'Withdraw History' },
            { label: 'Package History' },
            { label: 'Bonus History' },
            { label: 'Activation wallet' },
            { label: 'External Transfer' },
          ]}
        />

        <ParentNavItem label="Support" children={[{ label: 'Inbox' }, { label: 'Compose Mail' }, { label: 'Sent Items' }]} />
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
    </aside>
  );
};

export default Sidebar;
