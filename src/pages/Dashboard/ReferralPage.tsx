import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ReferralApi, { type ReferralDetails } from "../../services/ReferralApi";

const ReferralPage: React.FC = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState<ReferralDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const referralApi = new ReferralApi();
  const referralLink = details?.referralCode
    ? `${window.location.origin}/signup?referralCode=${details.referralCode}`
    : "";

  useEffect(() => {
    referralApi.getMine()
      .then(setDetails)
      .catch(() => toast.error("Failed to load referral details."))
      .finally(() => setLoading(false));
  }, []);

  const copyLink = async () => {
    if (!referralLink) return;
    await navigator.clipboard.writeText(referralLink);
    toast.success("Referral link copied.");
  };

  return (
    <div className="space-y-6">
      <button
        type="button"
        onClick={() => navigate("/dashboard")}
        className="rounded-lg border border-gray-700 px-4 py-2 text-sm text-gray-200 transition hover:border-yellow-500 hover:text-yellow-400"
      >
        Back to Dashboard
      </button>

      <div className="rounded-2xl border border-yellow-500/10 bg-[#0f1724] p-6">
        <h2 className="text-xl font-semibold text-white">Your Referral</h2>
        <p className="mt-1 text-sm text-gray-400">
          Share your link. Direct sponsors receive 8% after an approved package purchase.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <input
            readOnly
            value={loading ? "Loading..." : referralLink}
            className="min-w-0 flex-1 rounded-lg border border-gray-700 bg-[#0b1220] px-3 py-2 text-sm text-gray-200"
          />
          <button
            type="button"
            onClick={copyLink}
            disabled={!referralLink}
            className="rounded-lg bg-yellow-500 px-4 py-2 text-sm font-semibold text-black disabled:opacity-50"
          >
            Copy Link
          </button>
        </div>

      </div>

      <div className="rounded-2xl border border-gray-800 bg-[#0f1724] p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">Direct Members</h3>
          <span className="text-sm text-gray-400">{details?.directReferrals.length || 0}</span>
        </div>
        <div className="mt-4 divide-y divide-gray-800">
          {details?.directReferrals.map((member) => (
            <div key={member.id} className="flex items-center justify-between py-3 text-sm">
              <span className="text-gray-200">{member.fullName || member.email}</span>
              <span className="text-gray-500">{new Date(member.createdAt).toLocaleDateString()}</span>
            </div>
          ))}
          {!loading && !details?.directReferrals.length && (
            <p className="py-3 text-sm text-gray-500">No direct members yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReferralPage;