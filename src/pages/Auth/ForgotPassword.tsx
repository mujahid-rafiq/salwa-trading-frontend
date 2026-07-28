import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForgotPasswordMutation } from "../../hooks/useAuth";
import { ROUTES } from "../../app-routes/constants";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const forgotPasswordMutation = useForgotPasswordMutation();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error("Please enter your registered email.");
      return;
    }

    try {
      await forgotPasswordMutation.mutateAsync({ email });
      toast.success("OTP has been sent to your email.");
      navigate(ROUTES.VERIFYOTP, { state: { email, mode: 'reset' } });
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Unable to send OTP. Please try again.");
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
            <h1 className="text-3xl font-bold tracking-wide text-white">
              Forgot Password
            </h1>

            <p className="mt-2 text-sm text-gray-400">
              Enter your registered email
            </p>

            <p className="text-sm text-gray-500">
              We'll send you an OTP to reset your password.
            </p>
          </div>

          {/* Form */}
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>

            <div>
              <label className="mb-2 block text-sm text-gray-300">
                Email Address
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-xl border border-gray-700 bg-[#1E1E1E] px-4 py-3 text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-yellow-500/20"
              />
            </div>

            <button
              type="submit"
              disabled={forgotPasswordMutation.isLoading}
              className="w-full cursor-pointer rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B8860B] py-3 font-semibold text-black shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-yellow-500/30 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {forgotPasswordMutation.isLoading ? "Sending OTP..." : "Send OTP"}
            </button>

          </form>

          {/* Back to Login */}
          <div className="mt-5 text-center">
            <Link
              to={ROUTES.LOGIN}
              className="font-medium text-[#D4AF37] transition hover:text-yellow-300 cursor-pointer"
            >
              ← Back to Login
            </Link>
          </div>

          {/* Footer.. */}
          <div className="mt-8 border-t border-gray-800 pt-5 text-center text-xs text-gray-500">
            © 2026 Salwa Trading. All Rights Reserved.
          </div>

        </div>

      </div>

    </div>
  );
};

export default ForgotPassword;