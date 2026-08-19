import React from "react";

interface Props {
  requests: any[];
  page: number;
  pageSize: number;
  actionLoading: number | null;
  onApprove: (id: number) => void;
  onReject: (id: number) => void;
  onPageChange: (page: number) => void;
}

const AdminPaymentsTable: React.FC<Props> = ({
  requests,
  page,
  pageSize,
  actionLoading,
  onApprove,
  onReject,
  onPageChange,
}) => {
  const totalPages = Math.max(1, Math.ceil(requests.length / pageSize));
  const paged = requests.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="space-y-4">
      <div className="hidden md:block overflow-x-auto rounded-2xl border border-gray-800 bg-[#0f1724]">
        <table className="min-w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-gray-800 bg-[#111827] text-gray-400">
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Source</th>
              <th className="px-4 py-3">Method</th>
              <th className="px-4 py-3">Details</th>
              <th className="px-4 py-3">User</th>
              <th className="px-4 py-3">Requested At</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paged.map((r) => (
              <tr key={r.id} className="border-b border-gray-800 hover:bg-[#121827]">
                <td className="px-4 py-4 text-white">{r.id}</td>
                <td className="px-4 py-4 text-gray-300">{r.paymentMethod === 'USDT' ? `$${Number(r.amount).toLocaleString()}` : `PKR ${Number(r.amount).toLocaleString()}`}</td>
                <td className="px-4 py-4 text-gray-300">{r.source}</td>
                <td className="px-4 py-4 text-gray-300">{r.paymentMethod ?? "N/A"}</td>
                <td className="px-4 py-4 text-gray-300">
                  {r.paymentMethod === 'Bank transfer' ? (
                    <div>
                      {r.bankName ? <div>Bank: {r.bankName}</div> : null}
                      {r.iban ? <div>IBAN: {r.iban}</div> : null}
                    </div>
                  ) : (
                    <div>
                      {r.accountTitle ? <div>Account: {r.accountTitle}</div> : null}
                      {r.mobileNumber ? <div>Mobile: {r.mobileNumber}</div> : null}
                    </div>
                  )}
                </td>
                <td className="px-4 py-4 text-gray-300">
                  <div>{r.user?.fullName ?? r.user?.email ?? 'Unknown'}</div>
                  {r.user?.fullName ? <div className="text-sm text-gray-400">{r.user?.email}</div> : null}
                </td>
                <td className="px-4 py-4 text-gray-300">{new Date(r.createdAt).toLocaleString()}</td>
                <td className="px-4 py-4">
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => onApprove(r.id)}
                      disabled={actionLoading === r.id}
                      className="rounded-xl bg-green-500 px-4 py-2 text-sm font-semibold text-black transition hover:bg-green-400 disabled:opacity-50 cursor-pointer"
                    >
                      {actionLoading === r.id ? "Approving..." : "Approve"}
                    </button>
                    <button
                      type="button"
                      onClick={() => onReject(r.id)}
                      disabled={actionLoading === r.id}
                      className="rounded-xl bg-red-500 px-4 py-2 text-sm font-semibold text-black transition hover:bg-red-400 disabled:opacity-50 cursor-pointer"
                    >
                      {actionLoading === r.id ? "Rejecting..." : "Reject"}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-4 md:hidden">
        {paged.map((r) => (
          <div key={r.id} className="rounded-2xl border border-gray-800 bg-[#0f1724] p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-300">Amount</div>
                <div className="text-white font-bold">{r.paymentMethod === 'USDT' ? `$${Number(r.amount).toLocaleString()}` : `PKR ${Number(r.amount).toLocaleString()}`}</div>
              </div>
              <div className="text-sm text-gray-300">{new Date(r.createdAt).toLocaleString()}</div>
            </div>
            <div className="mt-3 text-sm text-gray-300">Method: {r.paymentMethod ?? 'N/A'}</div>
            <div className="mt-2 text-sm text-gray-300">User: {r.user?.fullName ?? r.user?.email ?? 'Unknown'}</div>
            <div className="mt-2 flex gap-2">
              <button
                type="button"
                onClick={() => onApprove(r.id)}
                disabled={actionLoading === r.id}
                className="rounded-xl bg-green-500 px-4 py-2 text-sm font-semibold text-black transition hover:bg-green-400 disabled:opacity-50 cursor-pointer"
              >
                {actionLoading === r.id ? "Approving..." : "Approve"}
              </button>
              <button
                type="button"
                onClick={() => onReject(r.id)}
                disabled={actionLoading === r.id}
                className="rounded-xl bg-red-500 px-4 py-2 text-sm font-semibold text-black transition hover:bg-red-400 disabled:opacity-50 cursor-pointer"
              >
                {actionLoading === r.id ? "Rejecting..." : "Reject"}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3 rounded-2xl border border-gray-800 bg-[#0f1724] p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-gray-400">Showing {paged.length} of {requests.length} requests</div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onPageChange(Math.max(1, page - 1))}
            disabled={page === 1}
            className="rounded-xl border border-gray-700 bg-[#111827] px-4 py-2 text-sm text-gray-200 transition hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-sm text-gray-300">Page {page} of {totalPages}</span>
          <button
            type="button"
            onClick={() => onPageChange(Math.min(totalPages, page + 1))}
            disabled={page === totalPages}
            className="rounded-xl border border-gray-700 bg-[#111827] px-4 py-2 text-sm text-gray-200 transition hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPaymentsTable;
