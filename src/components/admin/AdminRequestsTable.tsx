import type { PackageRequest } from "../../types/PackageRequest";
import AdminRequestCard from "./AdminRequestCard";

interface AdminRequestsTableProps {
  requests: PackageRequest[];
  page: number;
  pageSize: number;
  actionLoading: number | null;
  onApprove: (id: number) => void;
  onReject: (id: number) => void;
  onPageChange: (page: number) => void;
}

const AdminRequestsTable = ({
  requests,
  page,
  pageSize,
  actionLoading,
  onApprove,
  onReject,
  onPageChange,
}: AdminRequestsTableProps) => {
  const totalPages = Math.max(1, Math.ceil(requests.length / pageSize));
  const pagedRequests = requests.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="space-y-4">
      <div className="hidden md:block overflow-x-auto rounded-2xl border border-gray-800 bg-[#0f1724]">
        <table className="min-w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-gray-800 bg-[#111827] text-gray-400">
              <th className="px-4 py-3">Package</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Profit</th>
              <th className="px-4 py-3">Duration</th>
              <th className="px-4 py-3">Transaction ID</th>
              <th className="px-4 py-3">User</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {pagedRequests.map((request) => (
              <tr key={request.id} className="border-b border-gray-800 hover:bg-[#121827]">
                <td className="px-4 py-4 text-white">{request.packageName}</td>
                <td className="px-4 py-4 text-gray-300">${request.amount.toLocaleString()}</td>
                <td className="px-4 py-4 text-gray-300">{request.profitRate}</td>
                <td className="px-4 py-4 text-gray-300">{request.duration}</td>
                <td className="px-4 py-4 text-gray-300">{request.transactionId || "N/A"}</td>
                <td className="px-4 py-4 text-gray-300">{request.user?.email ?? "Unknown"}</td>
                <td className="px-4 py-4">
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => onApprove(request.id)}
                      disabled={actionLoading === request.id}
                      className="rounded-xl bg-green-500 px-4 py-2 text-sm font-semibold text-black transition hover:bg-green-400 disabled:opacity-50 cursor-pointer"
                    >
                      {actionLoading === request.id ? "Approving..." : "Approve"}
                    </button>
                    <button
                      type="button"
                      onClick={() => onReject(request.id)}
                      disabled={actionLoading === request.id}
                      className="rounded-xl bg-red-500 px-4 py-2 text-sm font-semibold text-black transition hover:bg-red-400 disabled:opacity-50 cursor-pointer"
                    >
                      {actionLoading === request.id ? "Rejecting..." : "Reject"}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-4 md:hidden">
        {pagedRequests?.map((request) => (
          <AdminRequestCard
            key={request?.id}
            request={request}
            actionLoading={actionLoading}
            onApprove={onApprove}
            onReject={onReject}
          />
        ))}
      </div>

      <div className="flex flex-col gap-3 rounded-2xl border border-gray-800 bg-[#0f1724] p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-gray-400">
          Showing {pagedRequests.length} of {requests.length} requests
        </div>
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

export default AdminRequestsTable;
