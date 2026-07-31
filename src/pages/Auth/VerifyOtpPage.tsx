import { useEffect, useState, type KeyboardEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../../app-routes/constants";
import { useActivateAccountMutation, useVerifyOtpMutation } from "../../mutation/useAuth";

const OtpVerificationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const email = location.state?.email as string | undefined;
  const mode = location.state?.mode as "activate" | "reset" | undefined;
  const verifyOtpMutation = useVerifyOtpMutation();
  const activateAccountMutation = useActivateAccountMutation();

  useEffect(() => {
    if (!email) {
      navigate(mode === "activate" ? ROUTES.SIGNUP : ROUTES.FORGOTPASSWORD, { replace: true });
    }
  }, [email, mode, navigate]);

  const handleChange = (index: number, value: string) => {
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
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevOtp = [...otp];
      prevOtp[index - 1] = "";
      setOtp(prevOtp);
      const prevInput = document.querySelectorAll<HTMLInputElement>("input[name^='otp-']");
      if (prevInput[index - 1]) prevInput[index - 1].focus();
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0B0B0B] px-4">

      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl"></div>

      <div className="relative w-full max-w-md">

        <div className="rounded-3xl border border-yellow-500/20 bg-[#151515]/90 p-8 shadow-[0_0_60px_rgba(212,175,55,0.08)] backdrop-blur-xl">

          {/* Logo */}
          <div className="flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-yellow-500 bg-[#1F1F1F] shadow-lg">
              <span className="text-4xl font-bold text-[#D4AF37]">
                S
              </span>
            </div>
          </div>

          {/* Heading */}
          <div className="mt-6 text-center">
            <h1 className="text-3xl font-bold text-white">
              OTP Verification
            </h1>

            <p className="mt-3 text-sm text-gray-400">
              {mode === "activate"
                ? "We've sent a 6-digit verification code to"
                : "Enter the 6-digit OTP sent to"}
            </p>

            <p className="font-medium text-[#D4AF37]">
              {email}
            </p>
          </div>

          {/* OTP Inputs */}
          <div className="mt-10 flex justify-between gap-3">

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
                className="h-14 w-14 rounded-xl border border-gray-700 bg-[#1E1E1E] text-center text-xl font-bold text-white outline-none transition-all duration-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-yellow-500/20"
              />
            ))}

          </div>

          {/* Verify Button */}
          <button
            type="button"
            onClick={async () => {
              const otpValue = otp.join("");

              if (!email || otpValue.length !== 6) {
                return;
              }

              try {
                if (mode === "activate") {
                  await activateAccountMutation.mutateAsync({ email, otp: otpValue });
                  navigate(ROUTES.LOGIN);
                } else {
                  await verifyOtpMutation.mutateAsync({ email, otp: otpValue });
                  navigate(ROUTES.RESET_PASSWORD, { state: { email, otp: otpValue } });
                }
              } catch (error) {
                console.error(error);
              }
            }}
            className="mt-8 w-full rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B8860B] py-3 font-semibold text-black shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-yellow-500/30"
          >
            {mode === "activate" ? "Verify & Activate" : "Verify OTP"}
          </button>

          {/* Resend */}
          <div className="mt-6 text-center">

            <p className="text-sm text-gray-400">
              Didn't receive the code?
            </p>

            <button
              className="mt-2 font-semibold text-[#D4AF37] transition hover:text-yellow-300"
            >
              Resend OTP
            </button>

            <p className="mt-3 text-sm text-gray-500">
              Resend available in <span className="text-[#D4AF37]">00:30</span>
            </p>

          </div>

          {/* Footer */}
          <div className="mt-8 border-t border-gray-800 pt-5 text-center text-xs text-gray-500">
            © 2026 Salwa Trading. All Rights Reserved.
          </div>

        </div>

      </div>

    </div>
  );
};

export default OtpVerificationPage;