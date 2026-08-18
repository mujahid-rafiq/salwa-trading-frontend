import { useState } from "react";
import { Check, Landmark, Wallet } from "lucide-react";
import { toast } from "react-toastify";
import CopyButton from "./CopyButton";

const walletAddress = "0xb1e5701a80679eafbb2d470505a56fa5e6ed4dffce7a0cf2737ca9ab80b4232f";

const PaymentInfo = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(walletAddress);
      setCopied(true);
      toast.success("Wallet address copied");
      setTimeout(() => setCopied(false), 1800);
    } catch {
      toast.error("Unable to copy wallet address");
    }
  };

  return (
    <div className="rounded-2xl border border-yellow-500/20 bg-[#111111] p-6">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-white">Deposit Information</h3>
        <p className="mt-1 text-sm text-gray-400">
          Send the exact package amount to one of the following accounts.
        </p>
      </div>

      <div className="space-y-5">
        <div className="flex items-center justify-between rounded-xl border border-gray-800 bg-[#1A1A1A] p-4">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500/10">
              <Wallet className="h-6 w-6 text-yellow-500" />
            </div>

            <div>
              <p className="text-sm text-gray-400">OKX UID</p>
              <button
                type="button"
                onClick={handleCopyAddress}
                className="mt-1 text-left text-lg font-semibold text-white transition hover:text-yellow-400"
                aria-label="Copy wallet address"
              >
                {copied ? (
                  <span className="inline-flex items-center gap-2 text-yellow-400">
                    <Check size={16} /> Copied
                  </span>
                ) : (
                  <span className="break-all">{walletAddress}</span>
                )}
              </button>
            </div>
          </div>

          <CopyButton value={walletAddress} />
        </div>

        <div className="flex items-center justify-between rounded-xl border border-gray-800 bg-[#1A1A1A] p-4">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10">
              <Landmark className="h-6 w-6 text-green-400" />
            </div>

            <div>
              <p className="text-sm text-gray-400">Forex Trading Account</p>
              <h4 className="text-lg font-semibold text-white">Add ink here</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;