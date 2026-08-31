import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ROUTES } from "../../app-routes/constants";
import WithdrawApi from "../../services/WithdrawApi";

const methodOptions = [
  "Bank transfer",
  "EasyPaisa",
  "JazzCash",
  "USDT",
] as const;

type PaymentMethod = (typeof methodOptions)[number];

const methodFields: Record<PaymentMethod, { label: string; placeholder: string; key: keyof FormState }[]> = {
  "Bank transfer": [
    { label: "Bank Name", placeholder: "Enter bank name", key: "bankName" },
    { label: "IBAN", placeholder: "Enter IBAN", key: "iban" },
    { label: "Mobile Number", placeholder: "Enter mobile number", key: "mobileNumber" },
  ],
  EasyPaisa: [
    { label: "Account Title", placeholder: "Enter account title", key: "accountTitle" },
    { label: "Mobile Number", placeholder: "Enter mobile number", key: "mobileNumber" },
  ],
  JazzCash: [
    { label: "Account Title", placeholder: "Enter account title", key: "accountTitle" },
    { label: "Mobile Number", placeholder: "Enter mobile number", key: "mobileNumber" },
  ],
  USDT: [
    { label: "Wallet Address", placeholder: "Enter USDT wallet address", key: "accountTitle" },
    { label: "Mobile Number", placeholder: "Enter mobile number", key: "mobileNumber" },
  ],
};

type FormState = {
  amount: string;
  bankName: string;
  iban: string;
  accountTitle: string;
  mobileNumber: string;
};

const initialFormState: FormState = {
  amount: "",
  bankName: "",
  iban: "",
  accountTitle: "",
  mobileNumber: "",
};

const WithdrawPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>("Bank transfer");
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [submitting, setSubmitting] = useState(false);

  const activeFields = useMemo(() => methodFields[selectedMethod], [selectedMethod]);
  const withdrawApi = new WithdrawApi();

  const updateField = (key: keyof FormState, value: string) => {
    setFormData((current) => ({ ...current, [key]: value }));
  };

  const handleSubmit = async () => {
    const amount = Number(formData.amount);

    if (!amount || amount <= 0) {
      toast.error("Please enter a valid withdrawal amount.");
      return;
    }

    if (amount < 20) {
      toast.error("Minimum withdrawal amount is $20.");
      return;
    }

    if (selectedMethod === "Bank transfer" && (!formData.bankName || !formData.iban || !formData.mobileNumber)) {
      toast.error("Please enter bank name, IBAN, and mobile number.");
      return;
    }

    if ((selectedMethod === "EasyPaisa" || selectedMethod === "JazzCash") && (!formData.accountTitle || !formData.mobileNumber)) {
      toast.error("Please enter both account title and mobile number.");
      return;
    }

    if (selectedMethod === "USDT" && (!formData.accountTitle || !formData.mobileNumber)) {
      toast.error("Please enter both wallet address and mobile number.");
      return;
    }

    setSubmitting(true);

    try {
      await withdrawApi.withdraw({
        amount,
        source: "earnings",
        paymentMethod: selectedMethod,
        bankName: selectedMethod === "Bank transfer" ? formData.bankName : undefined,
        iban: selectedMethod === "Bank transfer" ? formData.iban : undefined,
        accountTitle: selectedMethod !== "Bank transfer" ? formData.accountTitle : undefined,
        mobileNumber: formData.mobileNumber,
        notes: `Withdrawal via ${selectedMethod}`,
      });

      toast.success("Withdrawal request submitted successfully and sent to admin for approval.");
      setFormData(initialFormState);
      navigate(ROUTES.DASHBOARD);
    } catch (error: any) {
      console.error(error);
      toast.error(error?.response?.data?.message || "Failed to submit withdrawal request.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-yellow-500/10 bg-gradient-to-r from-yellow-500/10 to-amber-700/5 p-6">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">Withdraw</h2>
            <p className="mt-1 text-sm text-gray-300">
              Request a withdrawal from your account balance.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-gray-800 bg-[#0f1724] p-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Available balance (commented out per request)
          <div>
            <label className="mb-2 block text-sm text-gray-300">Available balance</label>
            <div className="rounded-lg border border-gray-700 bg-[#111827] px-4 py-3 text-xl font-semibold text-white">
              $0.00
            </div>
          </div>
          */}

          <div>
            <label className="mb-2 block text-sm text-gray-300">Withdrawal method</label>
            <select
              value={selectedMethod}
              onChange={(event) => setSelectedMethod(event.target.value as PaymentMethod)}
              className="w-full rounded-lg border border-gray-700 bg-[#111827] px-4 py-3 text-sm text-gray-200 outline-none focus:border-yellow-500"
            >
              {methodOptions.map((method) => (
                <option key={method} value={method}>
                  {method}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
          {activeFields.map((field) => (
            <div key={field.key} className="flex flex-col">
              <label className="mb-2 block text-sm text-gray-300">{field.label}</label>
              <input
                type="text"
                value={formData[field.key]}
                onChange={(event) => updateField(field.key, event.target.value)}
                placeholder={field.placeholder}
                className="w-full rounded-lg border border-gray-700 bg-[#111827] px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none focus:border-yellow-500"
              />
            </div>
          ))}

          <div className="flex flex-col">
            <label className="mb-2 block text-sm text-gray-300">Amount ({selectedMethod === 'USDT' ? 'USD' : 'PKR'})</label>
            <input
              type="number"
              value={formData.amount}
              onChange={(event) => updateField("amount", event.target.value)}
              placeholder={selectedMethod === 'USDT' ? 'Enter amount in USD' : 'Enter amount in PKR'}
              className="w-full rounded-lg border border-gray-700 bg-[#111827] px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none focus:border-yellow-500"
            />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={handleSubmit}
            disabled={submitting}
            className="cursor-pointer rounded-lg bg-yellow-500 px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-yellow-400 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {submitting ? "Submitting..." : "Submit Request"}
          </button>
          <button
            type="button"
            onClick={() => navigate(ROUTES.DASHBOARD)}
            className="cursor-pointer rounded-lg border border-gray-700 px-5 py-2.5 text-sm text-gray-200 transition hover:border-yellow-500 hover:text-yellow-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default WithdrawPage;
