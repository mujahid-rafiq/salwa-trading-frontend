import { CheckCircle2 } from "lucide-react";
import Modal from "../ui/Modal";

interface PurchaseSuccessModalProps {
  open: boolean;
  onClose: () => void;
  packageName: string;
}

const PurchaseSuccessModal: React.FC<PurchaseSuccessModalProps> = ({ open, onClose, packageName }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Request Submitted"
      description="Your purchase request has been sent. The admin will verify it and update your package status soon."
    >
      <div className="space-y-6 text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10 text-green-400">
          <CheckCircle2 size={40} />
        </div>
        <div className="rounded-3xl border border-green-500/20 bg-green-500/10 p-5 text-green-200">
          <p className="text-lg font-semibold">{packageName} purchase request submitted successfully.</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 px-6 py-3 font-semibold text-black transition hover:scale-[1.02]"
        >
          Continue
        </button>
      </div>
    </Modal>
  );
};

export default PurchaseSuccessModal;
