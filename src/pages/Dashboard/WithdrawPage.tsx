import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import WithdrawApi from "../../services/WithdrawApi";
import { useNavigate } from "react-router-dom";

const WithdrawPage: React.FC = () => {
  const [amount, setAmount] = useState<number | undefined>(undefined);
  const [source, setSource] = useState<"earnings" | "bonus">("earnings");
  const [earnings, setEarnings] = useState<number>(0);
  const [bonus, setBonus] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const withdrawApi = new WithdrawApi();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || amount <= 0) {
      toast.error("Please enter a valid amount to withdraw.");
      return;
    }

    const available = source === "earnings" ? earnings : bonus;
    if (amount > available) {
      toast.error("Entered amount exceeds available balance for selected source.");
      return;
    }

    setLoading(true);
    try {
      await toast.promise(
        withdrawApi.withdraw({
          amount,
          source,
          paymentMethod: "Bank transfer",
          bankName: "",
          iban: "",
        }),
        {
          pending: "Submitting withdrawal...",
          success: "Withdrawal request submitted successfully and sent to admin for approval.",
          error: "Failed to submit withdrawal. Please try again.",
        }
      );
      navigate("/dashboard");
    } catch (err) {
      // error handled by toast.promise
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadBalances = async () => {
      try {
        const data = await withdrawApi.getBalances();
        setEarnings(Number(data?.earnings ?? 0));
        setBonus(Number(data?.bonus ?? 0));
      } catch (err) {
        console.error(err);
        toast.error("Failed to load balances.");
      }
    };

    loadBalances();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-gray-800 bg-[#0f1724] p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-white">Withdraw Funds</h2>
            <p className="text-sm text-gray-400">Withdraw from your earnings or team bonus.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4 max-w-md">
          {/* Available Balance (commented out per request)
          <div>
            <label className="text-sm text-gray-300">Available Balance</label>
            <div className="mt-1 text-2xl font-bold text-white">${(earnings + bonus).toFixed(2)}</div>
            <div className="mt-2 text-sm text-gray-400">Earnings: ${earnings.toFixed(2)} • Team Bonus: ${bonus.toFixed(2)}</div>
          </div>
          */}

          <div>
            <label className="block text-sm text-gray-300">Source</label>
            <div className="mt-2 flex gap-4">
              <label className="inline-flex items-center gap-2 text-sm text-gray-200">
                <input type="radio" name="source" value="earnings" checked={source === "earnings"} onChange={() => setSource("earnings")} />
                Earnings
              </label>
              <label className="inline-flex items-center gap-2 text-sm text-gray-200">
                <input type="radio" name="source" value="bonus" checked={source === "bonus"} onChange={() => setSource("bonus")} />
                Bonus
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-300">Amount</label>
            <input
              type="number"
              min="0"
              step="0.01"
              value={amount ?? ""}
              onChange={(e) => setAmount(e.target.value ? Number(e.target.value) : undefined)}
              className="mt-2 w-full rounded-md bg-[#0b1220] border border-gray-700 px-3 py-2 text-white"
              placeholder="Enter amount to withdraw"
            />
          </div>

          <div className="flex items-center gap-3">
            <button
              type="submit"
              disabled={
                loading || !amount || amount <= 0 || (source === "earnings" ? amount > earnings : amount > bonus)
              }
              className="rounded-lg cursor-pointer bg-yellow-500 px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-yellow-400 disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Withdraw"}
            </button>

            <button
              type="button"
              className="rounded-lg border border-gray-700 px-5 py-2.5 text-sm text-gray-200"
              onClick={() => navigate(-1)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WithdrawPage;
