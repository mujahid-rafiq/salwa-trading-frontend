import { useEffect, useState, type KeyboardEvent, type FormEvent } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Loader2 } from "lucide-react";
import { useVerifyOtpMutation, useActivateAccountMutation, useResetPasswordMutation } from "../../mutation/useAuth";
import { ROUTES } from "../../app-routes/constants";
import noovacorLogo from "../../assets/noovacorLogo.png";

const OtpVerificationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isVerified, setIsVerified] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const email = location.state?.email || "";
  const mode = location.state?.mode || "reset";
  const verifyOtpMutation = useVerifyOtpMutation();
  const activateAccountMutation = useActivateAccountMutation();
  const resetPasswordMutation = useResetPasswordMutation();
  const isSubmitting = verifyOtpMutation.isPending || resetPasswordMutation.isPending || activateAccountMutation.isPending;

  useEffect(() => {
    if (!email) {
      navigate(mode === "activate" ? ROUTES.SIGNUP : ROUTES.FORGOTPASSWORD, { replace: true });
    }
  }, [email, mode, navigate]);

  const handleChange = (index: number, value: string) => {
    if (isSubmitting) return;
    if (!/\d?/.test(value)) return;

    const nextOtp = [...otp];
    nextOtp[index] = value;
    setOtp(nextOtp);

    if (value && index < otp.length - 1) {
      const nextInput = document.querySelectorAll<HTMLInputElement>("input[name^='otp-']");
      if (nextInput[index + 1]) nextInput[index + 1].focus();
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (isSubmitting) return;
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevOtp = [...otp];
      prevOtp[index - 1] = "";
      setOtp(prevOtp);
      const prevInput = document.querySelectorAll<HTMLInputElement>("input[name^='otp-']");
      if (prevInput[index - 1]) prevInput[index - 1].focus();
    }
  };

  const otpCode = otp.join("");

  const handleVerifyOtp = async (e: FormEvent) => {
    e.preventDefault();
    if (otpCode.length !== 6 || !email) {
      toast.error("Please enter the 6-digit OTP code.");
      return;
    }

    try {
      if (mode === "activate") {
        await activateAccountMutation.mutateAsync({ email, otp: otpCode });
        toast.success("Account verified successfully. Please login.");
        navigate(ROUTES.LOGIN);
        return;
      }

      await verifyOtpMutation.mutateAsync({ email, otp: otpCode });
      toast.success("OTP verified successfully.");
      setIsVerified(true);
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Unable to verify OTP.");
    }
  };

  const handleResetPassword = async (e: FormEvent) => {
    e.preventDefault();
    if (!newPassword || !confirmPassword) {
      toast.error("Please enter both password fields.");
      return;
    }

    try {
      await resetPasswordMutation.mutateAsync({
        email,
        otpCode,
        newPassword,
        confirmPassword,
      });
      toast.success("Password reset successful. Please login again.");
      navigate(ROUTES.LOGIN);
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Unable to reset password.");
    }
  };

  const isActivation = mode === "activation";

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0B0B0B] px-3 py-5 sm:px-4 sm:py-6">

      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl sm:h-96 sm:w-96"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl sm:h-96 sm:w-96"></div>

      <div className="relative w-full max-w-[20rem] sm:max-w-md">

        <div className="rounded-[24px] border border-yellow-500/20 bg-[#151515]/90 p-4 shadow-[0_0_60px_rgba(212,175,55,0.08)] backdrop-blur-xl sm:rounded-[28px] sm:p-8">

          {/* Logo */}
          <Link to={ROUTES.HOME} className="flex justify-center transition hover:opacity-80">
            <img src={noovacorLogo} alt="Noovacor Logo" className="h-16 w-16 object-contain sm:h-20 sm:w-20" />
          </Link>

          {/* Heading */}
          <div className="mt-6 text-center">
            <h1 className="text-2xl font-bold text-white sm:text-3xl">
              OTP Verification
            </h1>

            <p className="mt-3 text-sm text-gray-400">
              {isActivation ? "We've sent a 6-digit verification code to" : "We've sent a 6-digit verification code to"}
            </p>

            <p className="break-all font-medium text-[#D4AF37]">
              {email}
            </p>
          </div>

          {/* OTP Inputs */}
          <div className="mt-8 grid grid-cols-6 gap-2 sm:gap-3">

            {otp.map((digit, index) => (
              <input
                key={index}
                name={`otp-${index}`}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                disabled={isSubmitting}
                className="h-12 w-full min-w-0 rounded-xl border border-gray-700 bg-[#1E1E1E] text-center text-base font-bold text-white outline-none transition-all duration-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-yellow-500/20 disabled:cursor-not-allowed disabled:opacity-60 sm:h-14 sm:text-xl"
              />
            ))}

          </div>

          <form onSubmit={isActivation ? handleVerifyOtp : (isVerified ? handleResetPassword : handleVerifyOtp)} className="mt-8 space-y-5">
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B8860B] py-3.5 font-semibold text-black shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-yellow-500/30 cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100 disabled:hover:shadow-none"
              disabled={isSubmitting}
            >
              {isSubmitting ? <Loader2 className="h-5 w-5 animate-spin" /> : null}
              {isSubmitting
                ? (isVerified ? "Resetting password..." : "Verifying OTP...")
                : isActivation
                ? (activateAccountMutation.isPending ? "Verifying OTP..." : "Verify Account")
                : isVerified
                ? (resetPasswordMutation.isPending ? "Resetting password..." : "Reset Password")
                : (verifyOtpMutation.isPending ? "Verifying OTP..." : "Verify OTP")}
            </button>

            {!isActivation && isVerified ? (
              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm text-gray-300">New Password</label>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter new password"
                    className="w-full rounded-xl border border-gray-700 bg-[#1E1E1E] px-4 py-3 text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-yellow-500/20"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-gray-300">Confirm Password</label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm new password"
                    className="w-full rounded-xl border border-gray-700 bg-[#1E1E1E] px-4 py-3 text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-yellow-500/20"
                  />
                </div>
              </div>
            ) : null}
          </form>

          {/* Resend */}
          <div className="mt-6 text-center">

            <p className="text-sm text-gray-400">
              Didn't receive the code?
            </p>

            <button
              className="mt-2 font-semibold text-[#D4AF37] transition hover:text-yellow-300 cursor-pointer"
            >
              Resend OTP
            </button>

            <p className="mt-3 text-sm text-gray-500">
              Resend available in <span className="text-[#D4AF37]">00:30</span>
            </p>

          </div>

          {/* Footer */}
          <div className="mt-8 border-t border-gray-800 pt-5 text-center text-xs text-gray-500">
            © 2026 Noovacor. All Rights Reserved.
          </div>

        </div>

      </div>

    </div>
  );
};

export default OtpVerificationPage;