import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
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
  requestType?: "investment" | "registration";
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
  requestType = "investment",
}) => {
  const [successOpen, setSuccessOpen] = useState(false);
  const isRegistration = requestType === "registration";

  const formik = useFormik<PurchaseFormValues>({
    enableReinitialize: true,
    initialValues: {
      amount: isRegistration ? "10" : "",
      paymentMethod: "Online USDT Deposit",
      transactionId: "",
      paymentScreenshot: null,
    },
    validationSchema: Yup.object({
      amount: Yup.number()
        .typeError("Please enter a valid amount")
        .required("Amount is required")
        .min(isRegistration ? 10 : 100, isRegistration ? "Registration fee is $10" : "Minimum deposit is $100"),
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

        if (isRegistration) {
          await packageRequestApi.submitRegistrationRequest(dto);
        } else {
          await packageRequestApi.submitRequest(dto);
        }
        toast.success(`${isRegistration ? "Registration" : "Package"} request sent to admin for verification.`);
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
        amount={Number(formik.values.amount)}
      />
    );
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 p-4 backdrop-blur-sm">
      <div className="mx-auto flex min-h-[calc(100vh-2rem)] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-yellow-500/20 bg-[#151515] shadow-[0_0_40px_rgba(212,175,55,0.18)]">
        <div className="border-b border-gray-800 px-6 py-5">
          <div>
            <h2 className="text-2xl font-bold text-white">{isRegistration ? "Account Registration" : "Buy Investment Package"}</h2>
            <p className="mt-1 text-sm text-gray-400">Submit your payment details for admin verification.</p>
          </div>
        </div>

        <form onSubmit={formik.handleSubmit} className="space-y-8 p-8">
          <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm text-gray-400">{isRegistration ? "Account creation fee" : "Custom deposit"}</p>
                <h3 className="mt-2 text-2xl font-bold text-yellow-400">{isRegistration ? "$10 registration fee" : "Choose your amount"}</h3>
                <p className="text-sm text-gray-300">{isRegistration ? "Pay the one-time fee to activate your referral account." : "Minimum deposit: $100"}</p>
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
              <label className="mb-2 block text-sm text-gray-300">{isRegistration ? "Registration fee (USDT)" : "Enter amount (USDT)"}</label>
              <input
                name="amount"
                value={formik.values.amount}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="number"
                min={isRegistration ? "10" : "100"}
                step="0.01"
                readOnly={isRegistration}
                placeholder={isRegistration ? "$10" : "Minimum $100"}
                className="w-full rounded-xl border border-gray-700 bg-[#1D1D1D] px-4 py-3 text-white outline-none transition focus:border-yellow-500"
              />
              {formik.touched.amount && formik.errors.amount ? <p className="mt-2 text-xs text-red-400">{formik.errors.amount}</p> : null}
            </div>
          </div>

          <PaymentInfo amount={Number(formik.values.amount) || undefined} />

          <div>
            <label className="mb-2 block text-sm text-gray-300">Payment Transaction ID</label>
            <input
              name="transactionId"
              value={formik.values.transactionId}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              placeholder="Enter payment transaction ID"
              className="w-full rounded-xl border border-gray-700 bg-[#1D1D1D] px-4 py-3 text-white outline-none transition focus:border-yellow-500"
            />
            {formik.touched.transactionId && formik.errors.transactionId ? (
              <p className="mt-2 text-xs text-red-400">{formik.errors.transactionId}</p>
            ) : null}
          </div>

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
              {isRegistration
                ? "After approval, your account registration will be activated and your referral earnings can begin."
                : "After submission, your request is sent to admin for verification. Once approved, your dashboard and package status will update."}
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
              {formik.isSubmitting ? "Submitting..." : isRegistration ? "Submit Registration Request" : "Submit Deposit Request"}
            </button>
          </div>
        </form>
      </div>
      <PurchaseSuccessModal
        open={successOpen}
        onClose={handleSuccessClose}
        packageName={selectedPackage.name}
        amount={Number(formik.values.amount)}
      />
    </div>
  );
};

export default BuyPackageModal;