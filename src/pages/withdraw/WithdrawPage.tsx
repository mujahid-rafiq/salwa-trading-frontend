import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../app-routes/constants";

const WithdrawPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-yellow-500/10 bg-gradient-to-r from-yellow-500/10 to-amber-700/5 p-6">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">Withdraw</h2>
            <p className="mt-1 text-sm text-gray-300">
              Request a withdrawal from your account balance.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-gray-800 bg-[#0f1724] p-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm text-gray-300">Available balance</label>
            <div className="rounded-lg border border-gray-700 bg-[#111827] px-4 py-3 text-xl font-semibold text-white">
              $0.00
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-300">Withdrawal method</label>
            <select className="w-full rounded-lg border border-gray-700 bg-[#111827] px-4 py-3 text-sm text-gray-200 outline-none focus:border-yellow-500">
              <option>Bank transfer</option>
              <option>Crypto wallet</option>
              <option>E-wallet</option>
            </select>
          </div>
        </div>

        <div className="mt-6">
          <label className="mb-2 block text-sm text-gray-300">Amount</label>
          <input
            type="number"
            placeholder="Enter amount"
            className="w-full rounded-lg border border-gray-700 bg-[#111827] px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none focus:border-yellow-500"
          />
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button type="button" className="cursor-pointer rounded-lg bg-yellow-500 px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-yellow-400">
            Submit Request
          </button>
          <button
            type="button"
            onClick={() => navigate(ROUTES.DASHBOARD)}
            className="cursor-pointer rounded-lg border border-gray-700 px-5 py-2.5 text-sm text-gray-200 transition hover:border-yellow-500 hover:text-yellow-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default WithdrawPage;
