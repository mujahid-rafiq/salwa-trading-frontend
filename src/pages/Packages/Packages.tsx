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
    profit: "8% Monthly",
    duration: "24 Days",
    features: [
      "Monthly Profit",
      "24/7 Support",
      "Fast Withdraw",
      "Priority Support",
    ],
  },
  {
    id: 2,
    name: "Gold",
    price: 500,
    profit: "8% Monthly",
    duration: "24 Days",
    features: [
      "Monthly Profit",
      "VIP Support",
      "Fast Withdraw",
      "High ROI",
    ],
  },
  {
    id: 3,
    name: "Platinum",
    price: 1000,
    profit: "8% Monthly",
    duration: "24 Days",
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
    profit: "8% Monthly",
    duration: "24 Days",
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
    profit: "8% Monthly",
    duration: "24 Days",
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
    profit: "8% Monthly",
    duration: "24 Days",
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
    profit: "8% Monthly",
    duration: "24 Days",
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
    profit: "8% Monthly",
    duration: "24 Days",
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
    profit: "8% Monthly",
    duration: "24 Days",
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
    <div className="w-full space-y-8">
      {/* Header */}
      <div className="rounded-3xl border border-yellow-500/20 bg-gradient-to-r from-yellow-500/10 to-amber-700/5 p-8">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={handleGoBack}
            className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            ← Go back
          </button>
          <h1 className="text-3xl font-bold text-black">Investment Packages</h1>
        </div>

        <p className="mt-3 max-w-2xl text-black">
          Investment package that best matches your financial goals. After purchasing, submit your payment details for admin verification and activation.
        </p>
      </div>

      {/* Package Cards */}
      <div className="p-6 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
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