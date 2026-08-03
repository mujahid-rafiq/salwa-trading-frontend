import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ROUTES } from "../../app-routes/constants";
import PackageRequestApi from "../../services/PackageRequestApi";

const AdminDashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState<{
    pendingCount: number;
    approvedCount: number;
    rejectedCount: number;
    totalCount: number;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const packageRequestApi = new PackageRequestApi();

  useEffect(() => {
    const loadStats = async () => {
      setLoading(true);
      try {
        const data = await packageRequestApi.getAdminDashboard();
        setStats(data);
      } catch (error) {
        console.error(error);
        toast.error("Failed to load admin request stats.");
      } finally {
        setLoading(false);
      }
    };

    loadStats();
  }, []);

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-yellow-500/10 bg-gradient-to-r from-yellow-500/10 to-amber-700/5 p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">Admin Dashboard</h2>
            <p className="mt-1 text-sm text-gray-300">Manage users, monitor packages, and review system activity.</p>
          </div>
          <div className="text-sm text-gray-400">Current Date — {new Date().toLocaleString()}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl border border-gray-800 bg-[#0f1724] p-6">
          <div className="text-xs text-gray-400">Total Package Requests</div>
          <div className="mt-2 text-3xl font-bold text-white">{loading ? "..." : stats?.totalCount ?? 0}</div>
        </div>
        <div className="rounded-2xl border border-gray-800 bg-[#0f1724] p-6">
          <div className="text-xs text-gray-400">Approved Requests</div>
          <div className="mt-2 text-3xl font-bold text-white">{loading ? "..." : stats?.approvedCount ?? 0}</div>
        </div>
        <div className="rounded-2xl border border-gray-800 bg-[#0f1724] p-6">
          <div className="text-xs text-gray-400">Pending Approvals</div>
          <div className="mt-2 text-3xl font-bold text-white">{loading ? "..." : stats?.pendingCount ?? 0}</div>
        </div>
      </div>

      <div className="rounded-2xl border border-gray-800 bg-[#0f1724] p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-xs text-gray-400">Review workflow</div>
            <div className="mt-2 text-xl font-semibold text-white">Review pending package approval requests</div>
          </div>
          <button
            type="button"
            onClick={() => navigate(ROUTES.ADMIN_REQUESTS)}
            className="rounded-xl bg-yellow-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-yellow-400"
          >
            Go to Requests
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
