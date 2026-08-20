import React from "react";
import {
  ShieldCheck,
  Wallet,
  TrendingUp,
  Clock3,
  Headset,
  CheckCircle,
} from "lucide-react";

interface PackageFeaturesProps {
  features: string[];
}

const iconMap: Record<string, React.ReactNode> = {
  "Period Profit": <TrendingUp size={18} className="text-green-400" />,
  "Instant Activation": (
    <CheckCircle size={18} className="text-yellow-400" />
  ),
  "24/7 Support": <Headset size={18} className="text-blue-400" />,
  "Fast Withdraw": <Wallet size={18} className="text-purple-400" />,
  "Secure Investment": (
    <ShieldCheck size={18} className="text-emerald-400" />
  ),
  "VIP Support": <Headset size={18} className="text-yellow-400" />,
  "Priority Support": (
    <Headset size={18} className="text-orange-400" />
  ),
  "High ROI": <TrendingUp size={18} className="text-green-400" />,
  "Maximum ROI": <TrendingUp size={18} className="text-green-400" />,
  "Priority Approval": (
    <Clock3 size={18} className="text-cyan-400" />
  ),
  "Premium Benefits": (
    <ShieldCheck size={18} className="text-pink-400" />
  ),
};

const PackageFeatures: React.FC<PackageFeaturesProps> = ({
  features,
}) => {
  return (
    <div className="space-y-3">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex items-center gap-3 rounded-xl border border-gray-800 bg-[#1A1A1A] px-4 py-3 transition hover:border-yellow-500/30"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black/30">
            {iconMap[feature] ?? (
              <CheckCircle
                size={18}
                className="text-green-400"
              />
            )}
          </div>

          <span className="text-sm text-gray-300">
            {feature}
          </span>
        </div>
      ))}
    </div>
  );
};

export default PackageFeatures;