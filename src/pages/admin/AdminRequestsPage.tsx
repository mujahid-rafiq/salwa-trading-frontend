import { useEffect, useState } from "react";
import PackageRequestApi from "../../services/PackageRequestApi";
import type { PackageRequest } from "../../types/PackageRequest";

const adminApi = new PackageRequestApi();

const AdminRequestsPage: React.FC = () => {
  const [requests, setRequests] = useState<PackageRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState<number | null>(null);

  const fetchRequests = async () => {
    setLoading(true);
    try {
      const data = await adminApi.getPendingRequests();
      setRequests(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const handleApprove = async (id: number) => {
    setActionLoading(id);
    try {
      await adminApi.approveRequest(id);
      setRequests((current) => current.filter((request) => request.id !== id));
    } catch (error) {
      console.error(error);
    } finally {
      setActionLoading(null);
    }
  };

  const handleReject = async (id: number) => {
    setActionLoading(id);
    try {
      await adminApi.rejectRequest(id);
      setRequests((current) => current.filter((request) => request.id !== id));
    } catch (error) {
      console.error(error);
    } finally {
      setActionLoading(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-yellow-500/10 bg-gradient-to-r from-yellow-500/10 to-amber-700/5 p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">Admin Requests</h2>
            <p className="mt-1 text-sm text-gray-300">Review and approve package purchase requests.</p>
          </div>
          <div className="text-sm text-gray-400">Current Date — {new Date().toLocaleString()}</div>
        </div>
      </div>

      {loading ? (
        <div className="rounded-2xl border border-gray-800 bg-[#0f1724] p-6 text-center text-gray-300">Loading requests...</div>
      ) : requests.length === 0 ? (
        <div className="rounded-2xl border border-gray-800 bg-[#0f1724] p-6 text-center text-gray-300">No pending requests found.</div>
      ) : (
        <div className="grid gap-6">
          {requests.map((request) => (
            <div key={request.id} className="rounded-2xl border border-gray-800 bg-[#0f1724] p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white">{request.packageName}</h3>
                  <p className="text-sm text-gray-400">${request.amount} • {request.profitRate} • {request.duration}</p>
                  <p className="mt-2 text-sm text-gray-300">Transaction ID: {request.transactionId || "Not provided"}</p>
                  <p className="mt-1 text-sm text-gray-300">User: {request.user?.email}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => handleApprove(request.id)}
                    disabled={actionLoading === request.id}
                    className="rounded-xl bg-green-500 px-4 py-2 text-sm font-semibold text-black transition hover:bg-green-400 disabled:opacity-50"
                  >
                    {actionLoading === request.id ? "Approving..." : "Approve"}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleReject(request.id)}
                    disabled={actionLoading === request.id}
                    className="rounded-xl bg-red-500 px-4 py-2 text-sm font-semibold text-black transition hover:bg-red-400 disabled:opacity-50"
                  >
                    {actionLoading === request.id ? "Rejecting..." : "Reject"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminRequestsPage;
