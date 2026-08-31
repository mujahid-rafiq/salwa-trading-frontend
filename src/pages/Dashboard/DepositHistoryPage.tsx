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
    <div className="space-y-4 md:space-y-6">
      <div className="rounded-2xl border border-yellow-500/10 bg-gradient-to-r from-yellow-500/10 to-amber-700/5 p-4 md:p-6">
        <h2 className="text-xl font-bold text-white md:text-2xl">Profit History</h2>
        <p className="mt-1 text-xs text-gray-300 md:text-sm">
          Review your received investment profits, source deposits, and payment details.
        </p>
      </div>

      <div className="rounded-2xl border border-gray-800 bg-[#0f1724] p-3 md:p-6">
        <div className="flex items-center justify-between gap-2 md:gap-4">
          <div className="min-w-0">
            <h3 className="text-base font-semibold text-white md:text-lg">Profit History</h3>
            <p className="mt-1 text-xs text-gray-400 md:text-sm">Approved deposits and referral earnings appear here.</p>
          </div>
          <span className="shrink-0 text-[11px] text-gray-400 md:text-sm">{loading ? "..." : `${history.length} entries`}</span>
        </div>

        {loading ? (
          <div className="mt-6 rounded-xl border border-gray-800 p-6 text-center text-xs text-gray-400 md:p-8 md:text-sm">Loading history...</div>
        ) : history.length === 0 ? (
          <div className="mt-6 rounded-xl border border-dashed border-gray-700 p-6 text-center text-xs text-gray-400 md:p-8 md:text-sm">
            No profit has been received yet.
          </div>
        ) : (
          <div className="mt-6 overflow-x-auto rounded-xl border border-gray-700">
            <table className="min-w-[640px] w-full border-collapse text-left text-[11px] md:text-sm">
              <thead>
                <tr className="border-b border-gray-800 bg-[#111827] text-gray-400">
                  <th className="px-2 py-3 md:px-4">Received date & time</th>
                  <th className="px-2 py-3 md:px-4">Received from</th>
                  <th className="px-2 py-3 md:px-4">Payment method</th>
                  <th className="px-2 py-3 md:px-4">Deposit</th>
                  <th className="px-2 py-3 md:px-4">Profit received</th>
                </tr>
              </thead>
              <tbody>
                {history.map((entry) => (
                  <tr key={entry.id} className="border-b border-gray-800 text-gray-300 hover:bg-[#121827]">
                    <td className="whitespace-nowrap px-2 py-3 md:px-4">{new Date(entry.receivedAt).toLocaleString()}</td>
                    <td className="px-2 py-3 text-white md:px-4">{entry.source}</td>
                    <td className="px-2 py-3 md:px-4">{entry.paymentMethod}</td>
                    <td className="px-2 py-3 md:px-4">{formatCurrency(entry.depositAmount)}</td>
                    <td className="px-2 py-3 font-semibold text-emerald-400 md:px-4">+{formatCurrency(entry.profitAmount)}</td>
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
