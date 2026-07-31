import PackageCard from "../../components/packages/PackageCard";

const packageData = [
  {
    id: 1,
    name: "Starter",
    price: 50,
    profit: "1% Daily",
    duration: "30 Days",
    features: [
      "Daily Profit",
      "24/7 Support",
      "Instant Activation",
      "Secure Investment",
    ],
  },
  {
    id: 2,
    name: "Silver",
    price: 100,
    profit: "1.5% Daily",
    duration: "30 Days",
    features: [
      "Daily Profit",
      "24/7 Support",
      "Fast Withdraw",
      "Priority Support",
    ],
  },
  {
    id: 3,
    name: "Gold",
    price: 500,
    profit: "2% Daily",
    duration: "30 Days",
    features: [
      "Daily Profit",
      "VIP Support",
      "Fast Withdraw",
      "High ROI",
    ],
  },
  {
    id: 4,
    name: "Platinum",
    price: 1000,
    profit: "2.5% Daily",
    duration: "30 Days",
    features: [
      "Maximum ROI",
      "VIP Support",
      "Priority Approval",
      "Premium Benefits",
    ],
  },
];

const Packages = () => {
  return (
    <div className="w-full space-y-8">
      {/* Header */}
      <div className="rounded-3xl border border-yellow-500/20 bg-gradient-to-r from-yellow-500/10 to-amber-700/5 p-8">
        <h1 className="text-3xl font-bold text-black">
          Investment Packages
        </h1>

        <p className="mt-3 max-w-2xl text-black">
          Choose the investment package that best matches your financial
          goals. After purchasing, submit your payment details for admin
          verification and activation.
        </p>
      </div>

      {/* Package Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {packageData.map((pkg) => (
          <PackageCard
            key={pkg.id}
            id={pkg.id}
            name={pkg.name}
            price={pkg.price}
            profit={pkg.profit}
            duration={pkg.duration}
            features={pkg.features}
          />
        ))}
      </div>
    </div>
  );
};

export default Packages;    