import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import PackageRequestApi from "../../services/PackageRequestApi";
import type { PackageRequest } from "../../types/PackageRequest";
import AdminRequestsTable from "../../components/admin/AdminRequestsTable";

const adminApi = new PackageRequestApi();

const AdminRegistrationPage: React.FC = () => {
  const [requests, setRequests] = useState<PackageRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState<number | null>(null);
  const [page, setPage] = useState(1);
  const pageSize = 5;

  const fetchRequests = async () => {
    setLoading(true);
    try {
      const data = await adminApi.getPendingRegistrationRequests();
      setRequests(data ?? []);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load registration requests.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  useEffect(() => {
    if (page > 1 && requests.length <= (page - 1) * pageSize) {
      setPage(Math.max(1, Math.ceil(requests.length / pageSize)));
    }
  }, [page, requests.length]);

  const handleApprove = async (id: number) => {
    setActionLoading(id);
    try {
      await adminApi.approveRegistrationRequest(id);
      setRequests((current) => current.filter((request) => request.id !== id));
      toast.success("Account registration approved.");
    } catch (error) {
      console.error(error);
      toast.error("Failed to approve registration request.");
    } finally {
      setActionLoading(null);
    }
  };

  const handleReject = async (id: number) => {
    setActionLoading(id);
    try {
      await adminApi.rejectRegistrationRequest(id);
      setRequests((current) => current.filter((request) => request.id !== id));
      toast.success("Registration request rejected.");
    } catch (error) {
      console.error(error);
      toast.error("Failed to reject registration request.");
    } finally {
      setActionLoading(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-yellow-500/10 bg-gradient-to-r from-yellow-500/10 to-amber-700/5 p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">Account Registrations</h2>
            <p className="mt-1 text-sm text-gray-300">Review $10 registration payments and activate referral accounts.</p>
          </div>
          <div className="text-sm text-gray-400">Current Date — {new Date().toLocaleString()}</div>
        </div>
      </div>

      {loading ? (
        <div className="rounded-2xl border border-gray-800 bg-[#0f1724] p-6 text-center text-gray-300">Loading registration requests...</div>
      ) : requests.length === 0 ? (
        <div className="rounded-2xl border border-gray-800 bg-[#0f1724] p-6 text-center text-gray-300">No pending registration requests found.</div>
      ) : (
        <AdminRequestsTable
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

export default AdminRegistrationPage;
