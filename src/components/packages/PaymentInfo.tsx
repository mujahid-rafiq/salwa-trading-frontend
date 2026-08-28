import { useState } from "react";
import { Check, Wallet } from "lucide-react";
import { toast } from "react-toastify";
import CopyButton from "./CopyButton";
import scanImage from "../../assets/scan.jpeg";

const walletAddress = "0xb1e5701a80679eafbb2d470505a56fa5e6ed4dffce7a0cf2737ca9ab80b4232f";

interface PaymentInfoProps {
  amount?: number;
}

const PaymentInfo: React.FC<PaymentInfoProps> = ({ amount }) => {
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
    <div className="rounded-2xl border border-yellow-500/20 bg-[#111111] p-4 sm:p-6">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-white">Deposit Information</h3>
        <p className="mt-1 text-sm text-gray-400">
          Send the exact {amount ? `$${amount.toFixed(2)}` : "deposit"} amount to the payment account below.
        </p>
      </div>

      <div className="space-y-5">
        <div className="rounded-xl border border-gray-800 bg-white p-4 text-center">
          <p className="text-lg font-semibold text-gray-900">Scan to deposit USDT</p>
          <img
            src={scanImage}
            alt="USDT deposit QR code"
            className="mx-auto mt-4 h-auto w-full max-w-[260px] rounded-lg object-contain"
          />
        </div>

        <div className="flex flex-col gap-4 rounded-xl border border-gray-800 bg-[#1A1A1A] p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex min-w-0 items-start gap-3 sm:items-center sm:gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow-500/10 sm:h-12 sm:w-12">
              <Wallet className="h-6 w-6 text-yellow-500" />
            </div>

            <div className="min-w-0">
              <p className="text-sm text-gray-400">OKX UID</p>
              <button
                type="button"
                onClick={handleCopyAddress}
                className="mt-1 block max-w-full text-left text-base font-semibold leading-6 text-white transition hover:text-yellow-400 sm:text-lg"
                aria-label="Copy OKX UID"
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

          <div className="w-full shrink-0 sm:w-auto">
            <CopyButton value={walletAddress} />
          </div>
        </div>

        {/* <div className="flex items-center justify-between rounded-xl border border-gray-800 bg-[#1A1A1A] p-4">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10">
              <Landmark className="h-6 w-6 text-green-400" />
            </div>

            <div>
              <p className="text-sm text-gray-400">Forex Trading Account</p>
              <h4 className="text-lg font-semibold text-white">Add ink here</h4>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default PaymentInfo;