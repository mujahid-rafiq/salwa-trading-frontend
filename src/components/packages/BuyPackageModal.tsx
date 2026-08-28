import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { X } from "lucide-react";
import { toast } from "react-toastify";
import PaymentInfo from "./PaymentInfo";
import FileUpload from "./FileUpload";
import PurchaseSuccessModal from "./PurchaseSuccessModal";
import PackageRequestApi from "../../services/PackageRequestApi";
import type { CreatePackageRequestDto } from "../../services/PackageRequestApi";

export interface SelectedPackage {
  id: number;
  name: string;
  price: number;
  profit: string;
  duration: string;
}

interface BuyPackageModalProps {
  open: boolean;
  onClose: () => void;
  selectedPackage: SelectedPackage | null;
}

interface PurchaseFormValues {
  amount: string;
  paymentMethod: string;
  transactionId: string;
  paymentScreenshot: File | null;
}

const packageRequestApi = new PackageRequestApi();

const BuyPackageModal: React.FC<BuyPackageModalProps> = ({
  open,
  onClose,
  selectedPackage,
}) => {
  const [successOpen, setSuccessOpen] = useState(false);

  const formik = useFormik<PurchaseFormValues>({
    initialValues: {
      amount: "",
      paymentMethod: "Online USDT Deposit",
      transactionId: "",
      paymentScreenshot: null,
    },
    validationSchema: Yup.object({
      amount: Yup.number()
        .typeError("Please enter a valid amount")
        .required("Amount is required")
        .min(100, "Minimum deposit is $100"),
      transactionId: Yup.string()
        .trim()
        .required("Transaction ID is required")
        .min(3, "Transaction ID is too short"),
      paymentScreenshot: Yup.mixed<File>()
        .nullable()
        .required("Payment screenshot is required")
        .test("fileType", "Only JPG, JPEG, PNG, or WEBP images are allowed", (value) => {
          if (!value) return false;
          return ["image/jpeg", "image/jpg", "image/png", "image/webp"].includes(value.type);
        })
        .test("fileSize", "File must be smaller than 5MB", (value) => {
          if (!value) return false;
          return value.size <= 5 * 1024 * 1024;
        }),
    }),
    onSubmit: async (values) => {
      try {
        const amount = Number(values.amount);
        let paymentScreenshotUrl: string | undefined;

        if (values.paymentScreenshot) {
          const uploadResponse = await packageRequestApi.uploadPaymentImage(values.paymentScreenshot);
          paymentScreenshotUrl = uploadResponse?.url || uploadResponse?.data?.url;
        }

        const dto: CreatePackageRequestDto = {
          packageName: selectedPackage?.name ?? "",
          amount,
          paymentMethod: values.paymentMethod,
          profitRate: selectedPackage?.profit ?? "",
          duration: selectedPackage?.duration ?? "",
          transactionId: values.transactionId.trim(),
          paymentScreenshotUrl,
        };

        await packageRequestApi.submitRequest(dto);
        toast.success("Package request sent to admin for verification.");
        setSuccessOpen(true);
      } catch (error) {
        console.error(error);
        toast.error("Failed to submit request. Please try again.");
      }
    },
  });

  if (!open || !selectedPackage) return null;

  const handleSuccessClose = () => {
    setSuccessOpen(false);
    onClose();
    formik.resetForm();
  };

  if (successOpen) {
    return (
      <PurchaseSuccessModal
        open={successOpen}
        onClose={handleSuccessClose}
        packageName={selectedPackage.name}
      />
    );
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 p-4 backdrop-blur-sm">
      <div className="mx-auto flex min-h-[calc(100vh-2rem)] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-yellow-500/20 bg-[#151515] shadow-[0_0_40px_rgba(212,175,55,0.18)]">
        <div className="flex flex-col gap-3 border-b border-gray-800 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">Buy Investment Package</h2>
            <p className="mt-1 text-sm text-gray-400">Submit your deposit details for admin verification.</p>
          </div>
          <button
            onClick={onClose}
            className="cursor-pointer rounded-full p-2 text-gray-400 transition hover:bg-gray-800 hover:text-white"
          >
            <X size={22} />
          </button>
        </div>

        <form onSubmit={formik.handleSubmit} className="space-y-8 p-8">
          <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm text-gray-400">Custom deposit</p>
                <h3 className="mt-2 text-2xl font-bold text-yellow-400">Choose your amount</h3>
                <p className="text-sm text-gray-300">Minimum deposit: $100</p>
              </div>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm text-gray-300">Payment method</label>
              <div className="w-full rounded-xl border border-yellow-500 bg-[#1D1D1D] px-4 py-3 text-white">
                Online USDT Deposit
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-300">Enter amount (USDT)</label>
              <input
                name="amount"
                value={formik.values.amount}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="number"
                min="100"
                step="0.01"
                placeholder="Minimum $100"
                className="w-full rounded-xl border border-gray-700 bg-[#1D1D1D] px-4 py-3 text-white outline-none transition focus:border-yellow-500"
              />
              {formik.touched.amount && formik.errors.amount ? <p className="mt-2 text-xs text-red-400">{formik.errors.amount}</p> : null}
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-300">Transaction ID</label>
            <input
              name="transactionId"
              value={formik.values.transactionId}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              placeholder="Enter transaction ID"
              className="w-full rounded-xl border border-gray-700 bg-[#1D1D1D] px-4 py-3 text-white outline-none transition focus:border-yellow-500"
            />
            {formik.touched.transactionId && formik.errors.transactionId ? (
              <p className="mt-2 text-xs text-red-400">{formik.errors.transactionId}</p>
            ) : null}
          </div>

          <PaymentInfo amount={Number(formik.values.amount) || undefined} />
          <FileUpload
            value={formik.values.paymentScreenshot}
            onChange={(file) => {
              formik.setFieldValue("paymentScreenshot", file);
              formik.setFieldTouched("paymentScreenshot", true, false);
            }}
            error={formik.errors.paymentScreenshot as string | undefined}
            touched={Boolean(formik.touched.paymentScreenshot)}
          />

          <div className="rounded-xl border border-blue-500/20 bg-blue-500/10 p-4">
            <p className="text-sm leading-6 text-blue-300">
              After submission, your request is sent to admin for verification. Once approved, your dashboard and package status will update.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={onClose}
              className="cursor-pointer rounded-xl border border-gray-700 px-6 py-3 text-white transition hover:border-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={formik.isSubmitting}
              className="cursor-pointer rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B8860B] px-6 py-3 font-semibold text-black transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {formik.isSubmitting ? "Submitting..." : "Submit Purchase"}
            </button>
          </div>
        </form>
      </div>
      <PurchaseSuccessModal
        open={successOpen}
        onClose={handleSuccessClose}
        packageName={selectedPackage.name}
      />
    </div>
  );
};

export default BuyPackageModal;