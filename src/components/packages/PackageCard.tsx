import React from "react";
import { ArrowUpRight, CalendarDays, Check, DollarSign } from "lucide-react";
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
    <div className="group relative flex min-h-[590px] flex-col overflow-hidden rounded-[26px] border border-yellow-500/20 bg-[#151515] shadow-[0_18px_45px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500/70 hover:shadow-[0_22px_55px_rgba(212,175,55,0.16)]">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-yellow-500/[0.08] via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

      <div className="relative flex flex-1 flex-col p-7">
        {/* Package Name */}
        <div className="inline-flex w-fit rounded-full border border-yellow-500/40 bg-yellow-500/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-yellow-400">
          {name}
        </div>

        {/* Price */}
        <div className="mt-7 flex items-end gap-1">
          <DollarSign className="mb-1 h-7 w-7 text-yellow-500" />

          <span className="text-5xl font-extrabold tracking-tight text-white">
            {price}
          </span>

          <span className="mb-2 text-gray-400">USD</span>
        </div>

        {/* Package Details */}
        <div className="mt-8 space-y-4">
          <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-black/25 px-4 py-3.5">
            <span className="text-xs font-medium uppercase tracking-wide text-gray-400">
              Period Profit
            </span>

            <span className="text-sm font-bold text-emerald-400">
              {profit}
            </span>
          </div>

          <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-black/25 px-4 py-3.5">
            <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-gray-400">
              <CalendarDays className="h-4 w-4" />
              Duration
            </span>

            <span className="text-sm font-bold text-white">
              {duration}
            </span>
          </div>
        </div>

        {/* Features */}
        <div className="mt-8 space-y-3.5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3"
            >
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                <Check className="h-3.5 w-3.5" strokeWidth={3} />
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
          className="mt-auto flex w-full items-center justify-between rounded-2xl border border-yellow-300/30 bg-gradient-to-r from-[#E4BE45] via-[#D4AF37] to-[#B8860B] px-5 py-3.5 text-sm font-bold text-black shadow-[0_8px_20px_rgba(212,175,55,0.16)] transition-all duration-300 hover:brightness-110 hover:shadow-[0_12px_28px_rgba(212,175,55,0.28)] active:scale-[0.98] cursor-pointer"
        >
          <span>Buy Package</span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/15 transition-transform duration-300 group-hover:rotate-45">
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default PackageCard;