import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ROUTES } from "../../app-routes/constants";

import PaymentInfo from "../../components/packages/PaymentInfo";
import FileUpload from "../../components/packages/FileUpload";
import StatusBadge from "../../components/packages/StatusBadge";

const PackageDetails = () => {
  const navigate = useNavigate();
  const [transactionId, setTransactionId] = useState("");

  const selectedPackage = {
    id: 1,
    name: "Gold Package",
    price: 100,
    profit: "8% over 24 days",
    duration: "24 Days",
  };

  return (
    <div className="w-full">
      <div className="overflow-hidden rounded-2xl border border-yellow-500/20 bg-[#151515] shadow-[0_0_30px_rgba(212,175,55,0.12)]">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-800 px-6 py-4">
          <div>
            <h1 className="text-xl font-bold text-white">Buy Investment Package</h1>
            <p className="text-sm text-gray-400">Complete your payment below</p>
          </div>

          <button
            onClick={() => navigate(ROUTES.PACKAGES)}
            className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#B8860B] px-4 py-2 text-sm font-semibold text-black transition-all hover:scale-105"
          >
            <ArrowLeft size={16} />
            Back
          </button>
        </div>

        {/* Body */}
        <div className="grid gap-6 p-6 md:grid-cols-2">

          {/* Left column: package + transaction + status */}
          <div className="space-y-5">
            {/* Selected Package - compact */}
            <div className="rounded-xl border border-yellow-500/20 bg-gradient-to-r from-yellow-500/10 to-yellow-500/5 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400">Selected Package</p>
                  <h2 className="text-xl font-bold text-yellow-400">{selectedPackage.name}</h2>
                  <p className="text-xs text-gray-300">
                    {selectedPackage.profit} • {selectedPackage.duration}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-400">Amount</p>
                  <h2 className="text-3xl font-bold text-white">${selectedPackage.price}</h2>
                </div>
              </div>
            </div>

            {/* Transaction ID */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-300">
                Transaction ID
              </label>
              <input
                type="text"
                value={transactionId}
                onChange={(e) => setTransactionId(e.target.value)}
                placeholder="Enter your transaction ID"
                className="w-full rounded-lg border border-gray-700 bg-[#1B1B1B] px-3 py-2.5 text-sm text-white outline-none transition-all placeholder:text-gray-500 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20"
              />
              <p className="mt-1.5 text-xs text-blue-300">
                Finance team verifies payment → package activates automatically.
              </p>
            </div>

            {/* Status */}
            <div className="flex items-center justify-between rounded-lg border border-gray-800 bg-[#1B1B1B] px-4 py-3">
              <span className="text-sm font-medium text-gray-300">Current Status</span>
              <StatusBadge status="Pending" />
            </div>
          </div>

          {/* Right column: payment info + upload */}
          <div className="space-y-5">
            <PaymentInfo />
            <FileUpload />
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col-reverse gap-3 border-t border-gray-800 px-6 py-4 sm:flex-row sm:justify-end">
          <button
            onClick={() => navigate(ROUTES.PACKAGES)}
            className="rounded-lg border border-gray-700 bg-[#1B1B1B] px-5 py-2.5 text-sm font-medium text-gray-300 transition-all hover:border-red-500 hover:text-red-400"
          >
            Cancel
          </button>
          <button className="rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#B8860B] px-6 py-2.5 text-sm font-semibold text-black transition-all hover:scale-[1.03]">
            Submit Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;