import type { PackageRequest } from "../../types/PackageRequest";

interface AdminRequestCardProps {
  request: PackageRequest;
  actionLoading: number | null;
  onApprove: (id: number) => void;
  onReject: (id: number) => void;
}

const AdminRequestCard: React.FC<AdminRequestCardProps> = ({ request, actionLoading, onApprove, onReject }) => (
  <article className="rounded-3xl border border-gray-800 bg-[#111827] p-4 shadow-sm shadow-black/20">
    <div className="flex items-start justify-between gap-3">
      <div>
        <div className="text-sm uppercase tracking-[0.2em] text-yellow-300">{request.packageName}</div>
        <div className="mt-2 text-2xl font-semibold text-white">${request.amount.toLocaleString()}</div>
      </div>
      <span className="rounded-full bg-yellow-500/10 px-3 py-1 text-xs font-semibold uppercase text-yellow-300">{request.status}</span>
    </div>

    <div className="mt-4 grid gap-3 text-sm text-gray-300">
      <div className="flex items-center justify-between rounded-2xl bg-[#0f1724] p-3">
        <span>Profit</span>
        <span>{request.profitRate}</span>
      </div>
      <div className="flex items-center justify-between rounded-2xl bg-[#0f1724] p-3">
        <span>Duration</span>
        <span>{request.duration}</span>
      </div>
      <div className="flex items-center justify-between rounded-2xl bg-[#0f1724] p-3">
        <span>Transaction</span>
        <span>{request.transactionId || "N/A"}</span>
      </div>
      <div className="flex items-center justify-between rounded-2xl bg-[#0f1724] p-3">
        <span>User</span>
        <span>{request.user?.email ?? "Unknown"}</span>
      </div>
    </div>

    <div className="mt-4 flex flex-col gap-3">
      <button
        type="button"
        onClick={() => onApprove(request.id)}
        disabled={actionLoading === request.id}
        className="rounded-2xl bg-green-500 px-4 py-3 text-sm font-semibold text-black transition hover:bg-green-400 disabled:opacity-50 cursor-pointer"
      >
        {actionLoading === request.id ? "Approving..." : "Approve"}
      </button>
      <button
        type="button"
        onClick={() => onReject(request.id)}
        disabled={actionLoading === request.id}
        className="rounded-2xl bg-red-500 px-4 py-3 text-sm font-semibold text-black transition hover:bg-red-400 disabled:opacity-50 cursor-pointer"
      >
        {actionLoading === request.id ? "Rejecting..." : "Reject"}
      </button>
    </div>
  </article>
);

export default AdminRequestCard;
