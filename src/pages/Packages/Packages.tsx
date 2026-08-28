import { useNavigate } from "react-router-dom";
import BuyPackageModal from "../../components/packages/BuyPackageModal";
import type { SelectedPackage } from "../../components/packages/BuyPackageModal";

const customDeposit: SelectedPackage = {
  id: 0,
  name: "Custom Deposit",
  price: 100,
  profit: "8% over 30 days",
  duration: "30 Days",
};

const Packages = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="relative isolate w-full space-y-10 overflow-hidden rounded-[32px] bg-[#f7f3e9] px-1 py-1 pb-9 shadow-[inset_0_0_0_1px_rgba(212,175,55,0.12)] before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:bg-[linear-gradient(135deg,#fffaf0_0%,#f5eee1_46%,#edf3ee_100%)] after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:opacity-30 after:[background-image:linear-gradient(rgba(120,94,35,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(120,94,35,0.08)_1px,transparent_1px)] after:[background-size:42px_42px]">
      {/* Header */}
      <div className="rounded-[28px] border border-yellow-500/25 bg-gradient-to-br from-yellow-500/15 via-amber-500/5 to-transparent p-8 shadow-[0_18px_45px_rgba(212,175,55,0.06)]">
        <div className="flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={handleGoBack}
            className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-black px-4 py-2.5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-gray-800"
          >
            ← Go back
          </button>
          <h1 className="text-3xl font-extrabold tracking-tight text-black">Make a Deposit</h1>
        </div>

        <p className="mt-4 max-w-2xl text-sm leading-6 text-black/75">
          Choose a payment method and deposit any amount from $100. Submit your payment details for admin verification and activation.
        </p>
      </div>

      <BuyPackageModal
        open
        onClose={handleGoBack}
        selectedPackage={customDeposit}
      />
    </div>
  );
};

export default Packages;    