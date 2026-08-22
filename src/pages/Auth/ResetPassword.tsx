import { useEffect, useState } from "react";
import { useFormik, type FormikHelpers } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ROUTES } from "../../app-routes/constants";
import { useResetPasswordMutation } from "../../mutation/useAuth";

interface ResetPasswordState {
  email?: string;
  otp?: string;
}

interface ResetPasswordFormValues {
  newPassword: string;
  confirmPassword: string;
}

const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const resetPasswordMutation = useResetPasswordMutation();
  const [submitError, setSubmitError] = useState<string | null>(null);

  const state = location.state as ResetPasswordState | null;
  const email = state?.email;
  const otp = state?.otp;

  useEffect(() => {
    if (!email || !otp) {
      navigate(ROUTES.FORGOTPASSWORD, { replace: true });
    }
  }, [email, otp, navigate]);

  const formik = useFormik<ResetPasswordFormValues>({
    initialValues: {
      newPassword: "",
      confirmPassword: "",
    },
    onSubmit: async (values: ResetPasswordFormValues, { setSubmitting }: FormikHelpers<ResetPasswordFormValues>) => {
      setSubmitError(null);
      if (!email || !otp) {
        setSubmitError("Unable to reset password. Please retry the reset flow.");
        setSubmitting(false);
        return;
      }

      try {
        await toast.promise(
          resetPasswordMutation.mutateAsync({
            email,
            otpCode: otp,
            newPassword: values.newPassword,
            confirmPassword: values.confirmPassword,
          }),
          {
            pending: "Resetting password...",
            success: "Password reset successfully. You can now log in.",
            error: {
              render({ data }: any) {
                return data?.response?.data?.message || "Failed to reset password";
              },
            },
          }
        );

        navigate(ROUTES.LOGIN);
      } catch (error: any) {
        setSubmitError(error?.response?.data?.message || "Failed to reset password. Please try again.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0B0B0B] px-4 py-10">
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl"></div>

      <div className="relative w-full max-w-md">
        <div className="rounded-3xl border border-yellow-500/20 bg-[#151515]/90 p-8 shadow-[0_0_60px_rgba(212,175,55,0.08)] backdrop-blur-xl">
          <div className="flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-yellow-500 bg-[#1F1F1F] shadow-lg">
              <span className="text-4xl font-bold text-[#D4AF37]">S</span>
            </div>
          </div>

          <div className="mt-6 text-center">
            <h1 className="text-3xl font-bold text-white">Reset Password</h1>
            <p className="mt-2 text-sm text-gray-400">Enter a new password for your account.</p>
            <p className="mt-2 text-sm font-medium text-[#D4AF37]">{email}</p>
          </div>

          <form onSubmit={formik.handleSubmit} className="mt-8 space-y-5">
            <div>
              <label className="mb-2 block text-sm text-gray-300">New Password</label>
              <input
                name="newPassword"
                type="password"
                placeholder="Enter new password"
                value={formik.values.newPassword}
                onChange={formik.handleChange}
                className="w-full rounded-xl border border-gray-700 bg-[#1E1E1E] px-4 py-3 text-white placeholder:text-gray-500 outline-none transition duration-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-yellow-500/20"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-300">Confirm Password</label>
              <input
                name="confirmPassword"
                type="password"
                placeholder="Confirm new password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                className="w-full rounded-xl border border-gray-700 bg-[#1E1E1E] px-4 py-3 text-white placeholder:text-gray-500 outline-none transition duration-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-yellow-500/20"
              />
            </div>

            {submitError ? (
              <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                {submitError}
              </div>
            ) : null}

            <button
              type="submit"
              disabled={formik.isSubmitting}
              className="w-full rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B8860B] py-3 font-semibold text-black shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-yellow-500/30 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {formik.isSubmitting ? "Resetting password..." : "Reset Password"}
            </button>
          </form>

          <div className="mt-5 text-center">
            <button
              type="button"
              onClick={() => navigate(ROUTES.LOGIN)}
              className="font-medium text-[#D4AF37] transition hover:text-yellow-300 cursor-pointer"
            >
              ← Back to Login
            </button>
          </div>

          <div className="mt-8 border-t border-gray-800 pt-5 text-center text-xs text-gray-500">
            © 2026 Noovacor. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
