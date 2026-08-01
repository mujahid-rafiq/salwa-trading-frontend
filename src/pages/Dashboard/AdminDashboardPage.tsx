import React from "react";

const AdminDashboardPage: React.FC = () => {
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
          <div className="text-xs text-gray-400">Total Users</div>
          <div className="mt-2 text-3xl font-bold text-white">1,240</div>
        </div>
        <div className="rounded-2xl border border-gray-800 bg-[#0f1724] p-6">
          <div className="text-xs text-gray-400">Active Packages</div>
          <div className="mt-2 text-3xl font-bold text-white">312</div>
        </div>
        <div className="rounded-2xl border border-gray-800 bg-[#0f1724] p-6">
          <div className="text-xs text-gray-400">Pending Approvals</div>
          <div className="mt-2 text-3xl font-bold text-white">8</div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
