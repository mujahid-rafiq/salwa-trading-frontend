import { useFormik, type FormikHelpers } from "formik";
import { useState } from "react";
import { useNavigate, Link, useSearchParams } from "react-router-dom";
import { useRegisterMutation } from "../../mutation/useAuth";
import { RegisterDto } from "../../dto/register.dto";
import { toast } from "react-toastify";
import { EyeIcon, EyeOffIcon } from "../../svg";
import { ROUTES } from "../../app-routes/constants";
import noovacorLogo from "../../assets/noovacorLogo.png";

const Signup = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const referralCode = searchParams.get("referralCode")?.trim() || "";
  const registerMutation = useRegisterMutation();

  const formik = useFormik<RegisterDto>({
    initialValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      referralCode,
    },
    validationSchema: RegisterDto.yupSchema(),
    onSubmit: async (values: RegisterDto, { setSubmitting }: FormikHelpers<RegisterDto>) => {
      setSubmitError(null);
      try {
        await toast.promise(
          registerMutation?.mutateAsync({
            fullName: values?.fullName,
            email: values?.email,
            phoneNumber: values?.phoneNumber,
            password: values?.password,
            referralCode: values?.referralCode || undefined,
          }),
          {
            pending: "Creating account...",
            success: "Account created successfully! Please verify your email.",
            error: {
              render({ data }: any) {
                return data?.response?.data?.message || "Registration failed";
              },
            },
          }
        );

        navigate(ROUTES.VERIFYOTP, { state: { email: values.email, mode: "activate" } });
      } catch (error: any) {
        setSubmitError(error?.response?.data?.message || "Registration failed. Please try again.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0B0B0B] px-4 py-10">

      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl"></div>

      <div className="relative w-full max-w-lg">

        <div className="rounded-3xl border border-yellow-500/20 bg-[#151515]/90 p-8 shadow-[0_0_60px_rgba(212,175,55,0.08)] backdrop-blur-xl">

          {/* Logo */}
          <Link to={ROUTES.HOME} className="flex justify-center hover:opacity-80 transition">
            <img src={noovacorLogo} alt="Noovacor Logo" className="h-20 w-20 object-contain" />
          </Link>

          {/* Heading */}
          <div className="mt-6 text-center">
            <h1 className="text-3xl font-bold text-white">Create Account</h1>
            <p className="mt-2 text-sm text-gray-400">Join Noovacor Platform</p>
          </div>

          {/* Form */}
          <form onSubmit={formik.handleSubmit} className="mt-8 space-y-5">

            <div>
              <label className="mb-2 block text-sm text-gray-300">Referral Code (optional)</label>
              <input
                name="referralCode"
                type="text"
                placeholder="Enter referral code"
                value={formik.values.referralCode}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full rounded-xl border border-gray-700 bg-[#1E1E1E] px-4 py-3 text-white placeholder:text-gray-500 outline-none transition duration-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-yellow-500/20"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-300">Full Name</label>
              <input
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                value={formik.values.fullName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full rounded-xl border border-gray-700 bg-[#1E1E1E] px-4 py-3 text-white placeholder:text-gray-500 outline-none transition duration-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-yellow-500/20"
              />
              {formik.touched.fullName && formik.errors.fullName ? (
                <p className="mt-2 text-xs text-red-400">{formik.errors.fullName}</p>
              ) : null}
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-300">Email Address</label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full rounded-xl border border-gray-700 bg-[#1E1E1E] px-4 py-3 text-white placeholder:text-gray-500 outline-none transition duration-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-yellow-500/20"
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="mt-2 text-xs text-red-400">{formik.errors.email}</p>
              ) : null}
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-300">Phone Number</label>
              <input
                name="phoneNumber"
                type="tel"
                placeholder="+92 300 1234567"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full rounded-xl border border-gray-700 bg-[#1E1E1E] px-4 py-3 text-white placeholder:text-gray-500 outline-none transition duration-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-yellow-500/20"
              />
              {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                <p className="mt-2 text-xs text-red-400">{formik.errors.phoneNumber}</p>
              ) : null}
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-300">Password</label>
              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full rounded-xl border border-gray-700 bg-[#1E1E1E] px-4 py-3 pr-10 text-white placeholder:text-gray-500 outline-none transition duration-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-yellow-500/20"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200 cursor-pointer"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOffIcon className="h-5 w-5" />
                  ) : (
                    <EyeIcon className="h-5 w-5" />
                  )}
                </button>
              </div>
              {formik.touched.password && formik.errors.password ? (
                <p className="mt-2 text-xs text-red-400">{formik.errors.password}</p>
              ) : null}
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-300">Confirm Password</label>
              <div className="relative">
                <input
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full rounded-xl border border-gray-700 bg-[#1E1E1E] px-4 py-3 pr-10 text-white placeholder:text-gray-500 outline-none transition duration-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-yellow-500/20"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200 cursor-pointer"
                  aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                >
                  {showConfirmPassword ? (
                    <EyeOffIcon className="h-5 w-5" />
                  ) : (
                    <EyeIcon className="h-5 w-5" />
                  )}
                </button>
              </div>
              {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                <p className="mt-2 text-xs text-red-400">{formik.errors.confirmPassword}</p>
              ) : null}
            </div>

            {submitError ? (
              <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                {submitError}
              </div>
            ) : null}

            <button
              type="submit"
              disabled={formik.isSubmitting}
              className="w-full rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B8860B] py-3 font-semibold text-black shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-yellow-500/30 disabled:cursor-not-allowed disabled:opacity-70 cursor-pointer"
            >
              {formik.isSubmitting ? "Creating account..." : "Create Account"}
            </button>

          </form>

          <div className="mt-6 text-center text-sm text-gray-400">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="font-semibold text-[#D4AF37] hover:text-yellow-300 cursor-pointer"
            >
              Sign In
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

export default Signup;