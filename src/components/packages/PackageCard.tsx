import React from "react";
import { ArrowRight, CalendarDays, DollarSign } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface PackageCardProps {
  id: number;
  name: string;
  price: number;
  profit: string;
  duration: string;
  features: string[];
  onBuy?: () => void;
}

const PackageCard: React.FC<PackageCardProps> = ({
  id,
  name,
  price,
  profit,
  duration,
  features,
  onBuy,
}) => {
  const navigate = useNavigate();

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-yellow-500/20 bg-[#151515] transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500 hover:shadow-[0_0_35px_rgba(212,175,55,0.18)]">
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

      <div className="relative p-6">
        {/* Package Name */}
        <div className="inline-flex rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-yellow-400">
          {name}
        </div>

        {/* Price */}
        <div className="mt-6 flex items-end gap-1">
          <DollarSign className="h-8 w-8 text-yellow-500" />

          <span className="text-5xl font-bold text-white">
            {price}
          </span>

          <span className="mb-2 text-gray-400">USD</span>
        </div>

        {/* Package Details */}
        <div className="mt-8 space-y-4">
          <div className="flex items-center justify-between rounded-xl bg-black/20 px-4 py-3">
            <span className="text-sm text-gray-400">
              Monthly Profit
            </span>

            <span className="font-semibold text-green-400">
              {profit}
            </span>
          </div>

          <div className="flex items-center justify-between rounded-xl bg-black/20 px-4 py-3">
            <span className="flex items-center gap-2 text-sm text-gray-400">
              <CalendarDays className="h-4 w-4" />
              Duration
            </span>

            <span className="font-semibold text-white">
              {duration}
            </span>
          </div>
        </div>

        {/* Features */}
        <div className="mt-8 space-y-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500/20">
                <div className="h-2 w-2 rounded-full bg-green-400" />
              </div>

              <span className="text-sm text-gray-300">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Buy Button */}
        <button
          onClick={() => {
            if (onBuy) {
              onBuy();
              return;
            }
            navigate(`/packages/${id}`);
          }}
          className="mt-10 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B8860B] py-3 font-semibold text-black transition duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-yellow-500/30 cursor-pointer"
        >
          Buy Package

          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export default PackageCard;