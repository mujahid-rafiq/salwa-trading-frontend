import React, { useEffect, useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ROUTES } from "../../app-routes/constants";
import PackageRequestApi from "../../services/PackageRequestApi";
import WithdrawApi from "../../services/WithdrawApi";
import AuthApi from "../../services/AuthApi";

const authApi = new AuthApi();

const AdminDashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState<{
    pendingCount: number;
    approvedCount: number;
    rejectedCount: number;
    totalCount: number;
  } | null>(null);
  const [withdrawalStats, setWithdrawalStats] = useState<{
    pendingCount: number;
    approvedCount: number;
    rejectedCount: number;
    totalCount: number;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [showCreateAdminForm, setShowCreateAdminForm] = useState(false);
  const [creatingAdmin, setCreatingAdmin] = useState(false);
  const [adminForm, setAdminForm] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const packageRequestApi = new PackageRequestApi();
  const withdrawApi = new WithdrawApi();

  useEffect(() => {
    const loadStats = async () => {
      setLoading(true);
      try {
        const [requestData, withdrawalData] = await Promise.all([
          packageRequestApi.getAdminDashboard(),
          withdrawApi.getAdminDashboard(),
        ]);

        setStats(requestData);
        setWithdrawalStats(withdrawalData);
      } catch (error) {
        console.error(error);
        toast.error("Failed to load admin request stats.");
      } finally {
        setLoading(false);
      }
    };

    loadStats();
  }, []);

  const handleCreateAdmin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (adminForm.password !== adminForm.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setCreatingAdmin(true);
    try {
      await authApi.registerAdmin({
        fullName: adminForm.fullName,
        email: adminForm.email,
        phoneNumber: adminForm.phoneNumber,
        password: adminForm.password,
      });

      toast.success("Admin created successfully. Please verify the email.");
      setAdminForm({
        fullName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
      });
      setShowCreateAdminForm(false);
      navigate(ROUTES.VERIFYOTP, { state: { email: adminForm.email, mode: "activate" } });
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Failed to create admin");
    } finally {
      setCreatingAdmin(false);
    }
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="rounded-2xl border border-yellow-500/10 bg-gradient-to-r from-yellow-500/10 to-amber-700/5 p-4 md:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-xl font-bold text-white md:text-2xl">Admin Dashboard</h2>
            <p className="mt-1 text-xs text-gray-300 md:text-sm">Manage users, monitor packages, and review system activity.</p>
          </div>
          <div className="flex flex-col gap-3 items-start lg:items-end">
            <button
              type="button"
              onClick={() => setShowCreateAdminForm((current) => !current)}
              className="cursor-pointer rounded-xl border border-yellow-500/40 bg-yellow-500/10 px-4 py-2.5 text-xs font-semibold text-yellow-300 transition hover:bg-yellow-500/20 md:px-5 md:py-3 md:text-sm"
            >
              {showCreateAdminForm ? "Cancel" : "Create Admin"}
            </button>
            <div className="text-xs text-gray-400 md:text-sm">Current Date — {new Date().toLocaleString()}</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-gray-800 bg-[#0f1724] p-4 md:p-6">
          <div className="text-[10px] text-gray-400 md:text-xs">Total Package Requests</div>
          <div className="mt-2 text-2xl font-bold text-white md:text-3xl">{loading ? "..." : stats?.totalCount ?? 0}</div>
        </div>
        <div className="rounded-2xl border border-gray-800 bg-[#0f1724] p-4 md:p-6">
          <div className="text-[10px] text-gray-400 md:text-xs">Approved Requests</div>
          <div className="mt-2 text-2xl font-bold text-white md:text-3xl">{loading ? "..." : stats?.approvedCount ?? 0}</div>
        </div>
        <div className="rounded-2xl border border-gray-800 bg-[#0f1724] p-4 md:p-6">
          <div className="text-[10px] text-gray-400 md:text-xs">Pending Approvals</div>
          <div className="mt-2 text-2xl font-bold text-white md:text-3xl">{loading ? "..." : stats?.pendingCount ?? 0}</div>
        </div>
        <div className="rounded-2xl border border-gray-800 bg-[#0f1724] p-4 md:p-6">
          <div className="text-[10px] text-gray-400 md:text-xs">Pending Withdrawals</div>
          <div className="mt-2 text-2xl font-bold text-white md:text-3xl">{loading ? "..." : withdrawalStats?.pendingCount ?? 0}</div>
        </div>
      </div>

      <div className="rounded-2xl border border-gray-800 bg-[#0f1724] p-4 md:p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="text-[10px] text-gray-400 md:text-xs">Review workflow</div>
            <div className="mt-2 text-base font-semibold text-white md:text-xl">Review pending package approval requests</div>
          </div>
          <div>
            <button
              type="button"
              onClick={() => navigate(ROUTES.ADMIN_REQUESTS)}
              className="cursor-pointer rounded-xl bg-yellow-500 px-4 py-2.5 text-xs font-semibold text-black transition hover:bg-yellow-400 md:px-5 md:py-3 md:text-sm"
            >
              Go to Requests
            </button>
          </div>
        </div>
      </div>

      {showCreateAdminForm ? (
        <form onSubmit={handleCreateAdmin} className="rounded-2xl border border-yellow-500/20 bg-[#0f1724] p-4 md:p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-semibold text-white md:text-lg">Create New Admin</h3>
              <p className="mt-1 text-xs text-gray-400 md:text-sm">Only an authenticated admin can create another admin account.</p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs text-gray-300 md:text-sm">Full Name</label>
              <input
                type="text"
                required
                value={adminForm.fullName}
                onChange={(event) => setAdminForm((current) => ({ ...current, fullName: event.target.value }))}
                className="w-full rounded-xl border border-gray-700 bg-[#111827] px-3 py-2.5 text-sm text-white outline-none focus:border-yellow-500 md:px-4 md:py-3"
              />
            </div>
            <div>
              <label className="mb-2 block text-xs text-gray-300 md:text-sm">Email</label>
              <input
                type="email"
                required
                value={adminForm.email}
                onChange={(event) => setAdminForm((current) => ({ ...current, email: event.target.value }))}
                className="w-full rounded-xl border border-gray-700 bg-[#111827] px-3 py-2.5 text-sm text-white outline-none focus:border-yellow-500 md:px-4 md:py-3"
              />
            </div>
            <div>
              <label className="mb-2 block text-xs text-gray-300 md:text-sm">Phone Number</label>
              <input
                type="tel"
                required
                value={adminForm.phoneNumber}
                onChange={(event) => setAdminForm((current) => ({ ...current, phoneNumber: event.target.value }))}
                className="w-full rounded-xl border border-gray-700 bg-[#111827] px-3 py-2.5 text-sm text-white outline-none focus:border-yellow-500 md:px-4 md:py-3"
              />
            </div>
            <div>
              <label className="mb-2 block text-xs text-gray-300 md:text-sm">Password</label>
              <input
                type="password"
                required
                value={adminForm.password}
                onChange={(event) => setAdminForm((current) => ({ ...current, password: event.target.value }))}
                className="w-full rounded-xl border border-gray-700 bg-[#111827] px-3 py-2.5 text-sm text-white outline-none focus:border-yellow-500 md:px-4 md:py-3"
              />
            </div>
            <div className="md:col-span-2">
              <label className="mb-2 block text-xs text-gray-300 md:text-sm">Confirm Password</label>
              <input
                type="password"
                required
                value={adminForm.confirmPassword}
                onChange={(event) => setAdminForm((current) => ({ ...current, confirmPassword: event.target.value }))}
                className="w-full rounded-xl border border-gray-700 bg-[#111827] px-3 py-2.5 text-sm text-white outline-none focus:border-yellow-500 md:px-4 md:py-3"
              />
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="submit"
              disabled={creatingAdmin}
              className="rounded-xl bg-yellow-500 px-4 py-2.5 text-xs font-semibold text-black transition hover:bg-yellow-400 disabled:cursor-not-allowed disabled:opacity-70 md:text-sm"
            >
              {creatingAdmin ? "Creating..." : "Create Admin"}
            </button>
          </div>
        </form>
      ) : null}
    </div>
  );
};

export default AdminDashboardPage;
