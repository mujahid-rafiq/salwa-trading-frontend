import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PackageCard from "../../components/packages/PackageCard";
import BuyPackageModal from "../../components/packages/BuyPackageModal";
import type { SelectedPackage } from "../../components/packages/BuyPackageModal";

const packageData = [
  {
    id: 1,
    name: "Silver",
    price: 100,
    profit: "8% over 30 days",
    duration: "30 Days",
    features: [
      "8% profit over 30 days",
      "24/7 Support",
      "Fast Withdraw",
      "Priority Support",
    ],
  },
  {
    id: 2,
    name: "Gold",
    price: 500,
    profit: "8% over 30 days",
    duration: "30 Days",
    features: [
      "8% profit over 30 days",
      "VIP Support",
      "Fast Withdraw",
      "High ROI",
    ],
  },
  {
    id: 3,
    name: "Platinum",
    price: 1000,
    profit: "8% over 30 days",
    duration: "30 Days",
    features: [
      "Maximum ROI",
      "VIP Support",
      "Priority Approval",
      "Premium Benefits",
    ],
  },
  {
    id: 4,
    name: "Diamond",
    price: 1500,
    profit: "8% over 30 days",
    duration: "30 Days",
    features: [
      "Higher Returns",
      "VIP Support",
      "Fast Withdrawal",
      "Exclusive Access",
    ],
  },
  {
    id: 5,
    name: "Elite",
    price: 2000,
    profit: "8% over 30 days",
    duration: "30 Days",
    features: [
      "Premium ROI",
      "Dedicated Support",
      "Fast Withdrawal",
      "Priority Approval",
    ],
  },
  {
    id: 6,
    name: "Supreme",
    price: 2500,
    profit: "8% over 30 days",
    duration: "30 Days",
    features: [
      "Top Tier Returns",
      "VIP Support",
      "Priority Approval",
      "Premium Benefits",
    ],
  },
  {
    id: 7,
    name: "Executive",
    price: 3000,
    profit: "8% over 30 days",
    duration: "30 Days",
    features: [
      "Maximum ROI",
      "Dedicated Manager",
      "Fast Withdraw",
      "Exclusive Benefits",
    ],
  },
  {
    id: 8,
    name: "Ultimate",
    price: 4000,
    profit: "8% over 30 days",
    duration: "30 Days",
    features: [
      "Elite Returns",
      "Priority Support",
      "Instant Activation",
      "Premium Perks",
    ],
  },
  {
    id: 9,
    name: "VIP",
    price: 5000,
    profit: "8% over 30 days",
    duration: "30 Days",
    features: [
      "Highest ROI",
      "Dedicated Support",
      "Priority Approval",
      "Exclusive Withdrawal",
    ],
  },
];

const Packages = () => {
  const navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = useState<SelectedPackage | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleBuy = (pkg: SelectedPackage) => {
    setSelectedPackage(pkg);
    setModalOpen(true);
  };

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
          <h1 className="text-3xl font-extrabold tracking-tight text-black">Investment Packages</h1>
        </div>

        <p className="mt-4 max-w-2xl text-sm leading-6 text-black/75">
          Investment package that best matches your financial goals. After purchasing, submit your payment details for admin verification and activation.
        </p>
      </div>

      {/* Package Cards */}
      <div className="grid grid-cols-1 gap-6 px-5 sm:px-6 md:grid-cols-2 xl:grid-cols-4">
        {packageData.map((pkg) => (
          <PackageCard
            key={pkg.id}
            id={pkg.id}
            name={pkg.name}
            price={pkg.price}
            profit={pkg.profit}
            duration={pkg.duration}
            features={pkg.features}
            onBuy={() => handleBuy(pkg)}
          />
        ))}
      </div>

      <BuyPackageModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedPackage={selectedPackage}
      />
    </div>
  );
};

export default Packages;    