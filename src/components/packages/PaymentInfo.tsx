import { Landmark, Wallet } from "lucide-react";
import CopyButton from "./CopyButton";

const PaymentInfo = () => {
  return (
    <div className="rounded-2xl border border-yellow-500/20 bg-[#111111] p-6">

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-white">
          Deposit Information
        </h3>

        <p className="mt-1 text-sm text-gray-400">
          Send the exact package amount to one of the following accounts.
        </p>
      </div>

      <div className="space-y-5">

        {/* OKX UID */}
        <div className="flex items-center justify-between rounded-xl border border-gray-800 bg-[#1A1A1A] p-4">

          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500/10">
              <Wallet className="h-6 w-6 text-yellow-500" />
            </div>

            <div>
              <p className="text-sm text-gray-400">
                OKX UID
              </p>

              <h4 className="text-lg font-semibold text-white">
                758934562
              </h4>
            </div>

          </div>

          <CopyButton value="758934562" />

        </div>

        {/* Forex Account */}
        <div className="flex items-center justify-between rounded-xl border border-gray-800 bg-[#1A1A1A] p-4">

          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10">
              <Landmark className="h-6 w-6 text-green-400" />
            </div>

            <div>
              <p className="text-sm text-gray-400">
                Forex Trading Account
              </p>

              <h4 className="text-lg font-semibold text-white">
                123456789
              </h4>
            </div>

          </div>

          <CopyButton value="123456789" />

        </div>

      

      </div>

     

    </div>
  );
};

export default PaymentInfo;