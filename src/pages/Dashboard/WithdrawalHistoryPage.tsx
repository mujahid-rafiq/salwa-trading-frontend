import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import WithdrawApi from "../../services/WithdrawApi";

type WithdrawalHistoryEntry = {
  id: number;
  amount: number;
  source: string;
  paymentMethod?: string;
  status: string;
  createdAt: string;
  reviewedAt?: string;
  notes?: string;
};

const formatCurrency = (value: number) =>
  `$${Number(value || 0).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

const WithdrawalHistoryPage: React.FC = () => {
  const [history, setHistory] = useState<WithdrawalHistoryEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const withdrawApi = new WithdrawApi();

  useEffect(() => {
    withdrawApi
      .getMyHistory()
      .then((data) => setHistory(data ?? []))
      .catch(() => toast.error("Failed to load withdrawal history."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-yellow-500/10 bg-gradient-to-r from-yellow-500/10 to-amber-700/5 p-6">
        <h2 className="text-2xl font-bold text-white">Withdrawal History</h2>
        <p className="mt-1 text-sm text-gray-300">
          Review your submitted withdrawal requests and approval status.
        </p>
      </div>

      <div className="rounded-2xl border border-gray-800 bg-[#0f1724] p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-white">My Withdrawals</h3>
            <p className="mt-1 text-sm text-gray-400">Pending, approved, and rejected requests appear here.</p>
          </div>
          <span className="text-sm text-gray-400">{loading ? "..." : `${history.length} entries`}</span>
        </div>

        {loading ? (
          <div className="mt-6 rounded-xl border border-gray-800 p-8 text-center text-sm text-gray-400">Loading withdrawal history...</div>
        ) : history.length === 0 ? (
          <div className="mt-6 rounded-xl border border-dashed border-gray-700 p-8 text-center text-sm text-gray-400">
            No withdrawal requests yet.
          </div>
        ) : (
          <div className="mt-6 overflow-x-auto rounded-xl border border-gray-700">
            <table className="min-w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-gray-800 bg-[#111827] text-gray-400">
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Source</th>
                  <th className="px-4 py-3">Method</th>
                  <th className="px-4 py-3">Amount</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {history.map((entry) => (
                  <tr key={entry.id} className="border-b border-gray-800 text-gray-300 hover:bg-[#121827]">
                    <td className="whitespace-nowrap px-4 py-4">{new Date(entry.createdAt).toLocaleString()}</td>
                    <td className="px-4 py-4 text-white capitalize">{entry.source}</td>
                    <td className="px-4 py-4">{entry.paymentMethod || "N/A"}</td>
                    <td className="px-4 py-4 font-semibold text-white">{formatCurrency(entry.amount)}</td>
                    <td className="px-4 py-4">
                      <span
                        className={
                          `inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
                            entry.status === "Completed"
                              ? "bg-emerald-500/15 text-emerald-300"
                              : entry.status === "Rejected"
                                ? "bg-red-500/15 text-red-300"
                                : "bg-yellow-500/15 text-yellow-300"
                          }`
                        }
                      >
                        {entry.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default WithdrawalHistoryPage;
