import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import WithdrawApi from "../../services/WithdrawApi";
import AdminPaymentsTable from "../../components/admin/AdminPaymentsTable";
// import AdminPaymentsTable from "../../components/admin/AdminPaymentsTable";

const withdrawApi = new WithdrawApi();

const AdminPaymentsPage: React.FC = () => {
  const [requests, setRequests] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState<number | null>(null);
  const [page, setPage] = useState(1);
  const pageSize = 8;

  const fetchRequests = async () => {
    setLoading(true);
    try {
      const data = await withdrawApi.getPendingWithdrawals();
      setRequests(data || []);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load payment requests.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleApprove = async (id: number) => {
    setActionLoading(id);
    try {
      await withdrawApi.approveWithdrawal(id);
      setRequests((current) => current.filter((r) => r.id !== id));
    } catch (error) {
      console.error(error);
      toast.error("Failed to approve withdrawal.");
    } finally {
      setActionLoading(null);
    }
  };

  const handleReject = async (id: number) => {
    setActionLoading(id);
    try {
      await withdrawApi.rejectWithdrawal(id);
      setRequests((current) => current.filter((r) => r.id !== id));
    } catch (error) {
      console.error(error);
      toast.error("Failed to reject withdrawal.");
    } finally {
      setActionLoading(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-yellow-500/10 bg-gradient-to-r from-yellow-500/10 to-amber-700/5 p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">Payment Requests</h2>
            <p className="mt-1 text-sm text-gray-300">Review and process user withdrawal/payment requests.</p>
          </div>
          <div className="text-sm text-gray-400">Current Date — {new Date().toLocaleString()}</div>
        </div>
      </div>

      {loading ? (
        <div className="rounded-2xl border border-gray-800 bg-[#0f1724] p-6 text-center text-gray-300">Loading requests...</div>
      ) : requests.length === 0 ? (
        <div className="rounded-2xl border border-gray-800 bg-[#0f1724] p-6 text-center text-gray-300">No pending payment requests found.</div>
      ) : (
        <AdminPaymentsTable
          requests={requests}
          page={page}
          pageSize={pageSize}
          actionLoading={actionLoading}
          onApprove={handleApprove}
          onReject={handleReject}
          onPageChange={setPage}
        />
      )}
    </div>
  );
};

export default AdminPaymentsPage;
