import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../app-routes/constants";
import PackageRequestApi from "../../services/PackageRequestApi";
import StatusBadge from "../../components/packages/StatusBadge";

const StatCard: React.FC<{
  title: string;
  value: string;
  subtitle?: string;
}> = ({ title, value, subtitle }) => (
  <div className="rounded-2xl border border-gray-800 bg-gradient-to-tr from-[#111827] to-[#0b1220] p-6 shadow-lg transition-all duration-300 hover:border-yellow-500/30 hover:shadow-yellow-500/10">
    <div className="text-xs text-gray-400">{title}</div>
    <div className="mt-2 text-3xl font-bold text-white">{value}</div>
    {subtitle && (
      <div className="mt-1 text-xs text-gray-400">{subtitle}</div>
    )}
  </div>
);

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const [requests, setRequests] = useState<{
    id: number;
    packageName: string;
    amount: number;
    profitRate: string;
    duration: string;
    transactionId?: string;
    status: string;
  }[]>([]);
  const [loading, setLoading] = useState(true);
  const packageRequestApi = new PackageRequestApi();

  useEffect(() => {
    const loadRequests = async () => {
      setLoading(true);
      try {
        const data = await packageRequestApi.getMyRequests();
        setRequests(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadRequests();
  }, []);

  const pendingCount = requests.filter((req) => req.status === "Pending").length;
  const approvedCount = requests.filter((req) => req.status === "Approved").length;
  const rejectedCount = requests.filter((req) => req.status === "Rejected").length;

  const handleClick = () => {
    navigate(ROUTES.PACKAGES);
  };

  return (
    <div className="space-y-6">
      {/* Welcome Card */}
      <div className="rounded-2xl border border-yellow-500/10 bg-gradient-to-r from-yellow-500/10 to-amber-700/5 p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Welcome back, Mujahid
            </h2>

            <p className="mt-1 text-sm text-gray-300">
              Here's what's happening with your account today.
            </p>
          </div>

          <div className="text-sm text-gray-400">
            Current Date — {new Date().toLocaleString()}
          </div>
        </div>
      </div>

      {/* Wallet Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard
          title="Cash Wallet"
          value="$0.00"
          subtitle="Available balance"
        />

        <StatCard
          title="Pending Requests"
          value={loading ? "..." : `${pendingCount}`}
          subtitle="Awaiting admin review"
        />

        <StatCard
          title="Approved Requests"
          value={loading ? "..." : `${approvedCount}`}
          subtitle="Activated packages"
        />

        <StatCard
          title="Rejected Requests"
          value={loading ? "..." : `${rejectedCount}`}
          subtitle="Requires action"
        />

        <StatCard
          title="Total Requests"
          value={loading ? "..." : `${requests.length}`}
          subtitle="Package submissions"
        />

        <StatCard
          title="Trading Bonus"
          value="$0.00"
          subtitle="Daily up to 2%"
        />
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Recent Activity */}
        <div className="rounded-2xl border border-gray-800 bg-[#0f1724] p-6">
          <h3 className="text-lg font-semibold text-white">
            Recent Activity
          </h3>

          <div className="mt-4 rounded-lg border border-dashed border-gray-700 p-6 text-center text-sm text-gray-400">
            No recent activity found.
          </div>
        </div>

        {/* My Package Requests */}
        <div className="rounded-2xl border border-gray-800 bg-[#0f1724] p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white">My Package Requests</h3>
              <p className="text-sm text-gray-400">Track your deposit requests and admin review status.</p>
            </div>
            <span className="text-sm text-gray-400">{loading ? "Loading..." : `${requests.length} total`}</span>
          </div>

          {loading ? (
            <div className="mt-6 text-center text-gray-400">Loading requests...</div>
          ) : requests.length === 0 ? (
            <div className="mt-6 rounded-lg border border-dashed border-gray-700 p-6 text-center text-sm text-gray-400">
              No package requests yet. Buy a package to start the approval flow.
            </div>
          ) : (
            <div className="mt-6 space-y-4">
              {requests.slice(0, 3).map((request) => (
                <div key={request.id} className="rounded-2xl border border-gray-700 bg-[#111827] p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm text-gray-400">{request.packageName}</p>
                      <p className="mt-1 text-sm text-gray-300">${request.amount} • {request.duration}</p>
                      <p className="mt-1 text-xs text-gray-500">Txn: {request.transactionId || "n/a"}</p>
                    </div>
                    <StatusBadge status={request.status as "Pending" | "Approved" | "Rejected"} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="rounded-2xl border border-gray-800 bg-[#0f1724] p-6">
          <h3 className="text-lg font-semibold text-white">
            Quick Actions
          </h3>

          <div className="mt-5 flex flex-wrap gap-3">
            <button
              onClick={handleClick}
              className="rounded-lg bg-yellow-500 px-5 py-2.5 font-semibold text-black transition hover:bg-yellow-400"
            >
              Buy Package
            </button>

            <button className="rounded-lg border border-gray-700 px-5 py-2.5 text-gray-200 transition hover:border-yellow-500 hover:text-yellow-400">
              Withdraw
            </button>

            <button className="rounded-lg border border-gray-700 px-5 py-2.5 text-gray-200 transition hover:border-yellow-500 hover:text-yellow-400">
              Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;