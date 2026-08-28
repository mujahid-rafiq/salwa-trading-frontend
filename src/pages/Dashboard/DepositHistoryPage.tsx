import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import PackageRequestApi from "../../services/PackageRequestApi";

type ProfitHistoryEntry = {
  id: string;
  receivedAt: string;
  source: string;
  paymentMethod: string;
  depositAmount: number;
  profitAmount: number;
};

const formatCurrency = (value: number) =>
  `$${Number(value || 0).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

const DepositHistoryPage: React.FC = () => {
  const [history, setHistory] = useState<ProfitHistoryEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const packageRequestApi = new PackageRequestApi();

  useEffect(() => {
    packageRequestApi
      .getProfitHistory()
      .then((data) => setHistory(data ?? []))
      .catch(() => toast.error("Failed to load profit history."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-yellow-500/10 bg-gradient-to-r from-yellow-500/10 to-amber-700/5 p-6">
        <h2 className="text-2xl font-bold text-white">Profit History</h2>
        <p className="mt-1 text-sm text-gray-300">
          Review your received investment profits, source deposits, and payment details.
        </p>
      </div>

      <div className="rounded-2xl border border-gray-800 bg-[#0f1724] p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-white">Profit History</h3>
            <p className="mt-1 text-sm text-gray-400">Approved deposits and referral earnings appear here.</p>
          </div>
          <span className="text-sm text-gray-400">{loading ? "..." : `${history.length} entries`}</span>
        </div>

        {loading ? (
          <div className="mt-6 rounded-xl border border-gray-800 p-8 text-center text-sm text-gray-400">Loading history...</div>
        ) : history.length === 0 ? (
          <div className="mt-6 rounded-xl border border-dashed border-gray-700 p-8 text-center text-sm text-gray-400">
            No profit has been received yet.
          </div>
        ) : (
          <div className="mt-6 overflow-x-auto rounded-xl border border-gray-700">
            <table className="min-w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-gray-800 bg-[#111827] text-gray-400">
                  <th className="px-4 py-3">Received date & time</th>
                  <th className="px-4 py-3">Received from</th>
                  <th className="px-4 py-3">Payment method</th>
                  <th className="px-4 py-3">Deposit</th>
                  <th className="px-4 py-3">Profit received</th>
                </tr>
              </thead>
              <tbody>
                {history.map((entry) => (
                  <tr key={entry.id} className="border-b border-gray-800 text-gray-300 hover:bg-[#121827]">
                    <td className="whitespace-nowrap px-4 py-4">{new Date(entry.receivedAt).toLocaleString()}</td>
                    <td className="px-4 py-4 text-white">{entry.source}</td>
                    <td className="px-4 py-4">{entry.paymentMethod}</td>
                    <td className="px-4 py-4">{formatCurrency(entry.depositAmount)}</td>
                    <td className="px-4 py-4 font-semibold text-emerald-400">+{formatCurrency(entry.profitAmount)}</td>
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

export default DepositHistoryPage;
