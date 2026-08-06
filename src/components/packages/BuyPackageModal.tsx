import { useState } from "react";
import { X } from "lucide-react";
import { toast } from "react-toastify";
import PaymentInfo from "./PaymentInfo";
import FileUpload from "./FileUpload";
import PurchaseSuccessModal from "./PurchaseSuccessModal";
import PackageRequestApi from "../../services/PackageRequestApi";
import type { CreatePackageRequestDto } from "../../services/PackageRequestApi";

export interface SelectedPackage {
  id: number;
  name: string;
  price: number;
  profit: string;
  duration: string;
}

interface BuyPackageModalProps {
  open: boolean;
  onClose: () => void;
  selectedPackage: SelectedPackage | null;
}

const packageRequestApi = new PackageRequestApi();

const BuyPackageModal: React.FC<BuyPackageModalProps> = ({
  open,
  onClose,
  selectedPackage,
}) => {
  const [transactionId, setTransactionId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);

  if (!open || !selectedPackage) return null;

  const handleSuccessClose = () => {
    setSuccessOpen(false);
    onClose();
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    const dto: CreatePackageRequestDto = {
      packageName: selectedPackage.name,
      amount: selectedPackage.price,
      profitRate: selectedPackage.profit,
      duration: selectedPackage.duration,
      transactionId: transactionId || undefined,
    };

    try {
      await packageRequestApi.submitRequest(dto);
      toast.success("Package request sent to admin for verification.");
      setSuccessOpen(true);
    } catch (error) {
      console.error(error);
      toast.error("Failed to submit request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (successOpen) {
    return (
      <PurchaseSuccessModal
        open={successOpen}
        onClose={handleSuccessClose}
        packageName={selectedPackage.name}
      />
    );
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 p-4 backdrop-blur-sm">
      <div className="mx-auto flex min-h-[calc(100vh-2rem)] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-yellow-500/20 bg-[#151515] shadow-[0_0_40px_rgba(212,175,55,0.18)]">
        <div className="flex flex-col gap-3 border-b border-gray-800 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">Buy Investment Package</h2>
            <p className="mt-1 text-sm text-gray-400">Submit your deposit details for admin verification.</p>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-gray-400 transition hover:bg-gray-800 hover:text-white"
          >
            <X size={22} />
          </button>
        </div>

        <div className="space-y-8 p-8">
          <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm text-gray-400">Selected Package</p>
                <h3 className="mt-2 text-2xl font-bold text-yellow-400">{selectedPackage.name}</h3>
                <p className="text-sm text-gray-300">{selectedPackage.profit} • {selectedPackage.duration}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-400">Investment</p>
                <h2 className="mt-2 text-4xl font-bold text-white">${selectedPackage.price}</h2>
              </div>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-300">Transaction ID</label>
            <input
              value={transactionId}
              onChange={(e) => setTransactionId(e.target.value)}
              type="text"
              placeholder="Enter transaction ID"
              className="w-full rounded-xl border border-gray-700 bg-[#1D1D1D] px-4 py-3 text-white outline-none transition focus:border-yellow-500"
            />
          </div>

          <PaymentInfo />
          <FileUpload />

          <div className="rounded-xl border border-blue-500/20 bg-blue-500/10 p-4">
            <p className="text-sm leading-6 text-blue-300">
              After submission, your request is sent to admin for verification. Once approved, your dashboard and package status will update.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <button
              onClick={onClose}
              className="rounded-xl border border-gray-700 px-6 py-3 text-white transition hover:border-gray-500"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B8860B] px-6 py-3 font-semibold text-black transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Submitting..." : "Submit Purchase"}
            </button>
          </div>
        </div>
      </div>
      <PurchaseSuccessModal
        open={successOpen}
        onClose={handleSuccessClose}
        packageName={selectedPackage.name}
      />
    </div>
  );
};

export default BuyPackageModal;