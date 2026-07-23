import React from "react";

const StatCard: React.FC<{ title: string; value: string; subtitle?: string }> = ({ title, value, subtitle }) => (
  <div className="rounded-2xl bg-gradient-to-tr from-[#111827] to-[#0b1220] p-6 shadow-lg border border-gray-800">
    <div className="text-xs text-gray-400">{title}</div>
    <div className="mt-2 text-3xl font-bold text-white">{value}</div>
    {subtitle ? <div className="mt-1 text-xs text-gray-400">{subtitle}</div> : null}
  </div>
);

const DashboardPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-r from-yellow-500/10 to-amber-700/5 p-6 border border-yellow-500/10">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Welcome back, Mujahid</h2>
            <p className="text-sm text-gray-300">Here's what's happening with your account today.</p>
          </div>
          <div className="text-sm text-gray-400">Current Date — {new Date().toLocaleString()}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard title="Cash Wallet" value="$0.00" subtitle="Available balance" />
        <StatCard title="Activation Wallet" value="$0.00" subtitle="Pending activations" />
        <StatCard title="E-Wallet" value="$0.00" subtitle="Quick withdraw" />
        <StatCard title="Active Package" value="$0.00" subtitle="Purchased count: 0" />
        <StatCard title="Total Earnings" value="$0.00" subtitle="Est. ROI 200%" />
        <StatCard title="Trading Bonus" value="$0.00" subtitle="Daily up to 2%" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-2xl bg-[#0f1724] p-6 border border-gray-800">
          <div className="text-white font-semibold">Recent Activity</div>
          <div className="mt-4 text-sm text-gray-400">No recent activity</div>
        </div>

        <div className="rounded-2xl bg-[#0f1724] p-6 border border-gray-800">
          <div className="text-white font-semibold">Quick Actions</div>
          <div className="mt-4 flex flex-wrap gap-3">
            <button className="px-4 py-2 rounded-lg bg-yellow-500 text-black font-semibold">Buy Package</button>
            <button className="px-4 py-2 rounded-lg border border-gray-700 text-gray-200">Withdraw</button>
            <button className="px-4 py-2 rounded-lg border border-gray-700 text-gray-200">Settings</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
