import { useFormik, type FormikHelpers } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../mutation/useAuth";
import { LoginDto } from "../../dto/login.dto";
import { ROUTES } from "../../app-routes/constants";
import { toast } from "react-toastify";
import { EyeIcon, EyeOffIcon } from "../../svg";
import { setAuth } from "../../redux/slices/authSlice";
import { Role } from "../../enums/Role";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const loginMutation = useLoginMutation();

  const formik = useFormik<LoginDto>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginDto.yupSchema(),
    onSubmit: async (values: LoginDto, { setSubmitting }: FormikHelpers<LoginDto>) => {
      setSubmitError(null);
      try {
      
        const res: any = await toast.promise(
          loginMutation.mutateAsync(values),
          {
            pending: "Signing in...",
            success: "Welcome back!",
            error: {
              render({ data }: any) {
                return data?.response?.data?.message || "Login failed";
              },
            },
          }
        );

        if (res?.accessToken) {
          dispatch(setAuth({ accessToken: res.accessToken, user: res?.user ?? null }));
        }

        if (res?.user?.role === Role.ADMIN) {
          navigate(ROUTES.ADMIN_DASHBOARD);
        } else {
          navigate(ROUTES.DASHBOARD);
        }
      } catch (error: any) {
        setSubmitError(error?.response?.data?.message || "Login failed. Please try again.");
      } finally {
        setSubmitting(false);
      }
    },
  });

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
              Salwa Trading
            </h1>

            <p className="mt-2 text-sm text-gray-400">
              Secure Trading Platform
            </p>

            <p className="text-sm text-gray-500">
              Sign in to your account
            </p>
          </div>

          {/* Form */}
          <form onSubmit={formik.handleSubmit} className="mt-8 space-y-5">

            <div>
              <label className="mb-2 block text-sm text-gray-300">Email Address</label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full rounded-xl border border-gray-700 bg-[#1E1E1E] px-4 py-3 text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-yellow-500/20"
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="mt-2 text-xs text-red-400">{formik.errors.email}</p>
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
                  className="w-full rounded-xl border border-gray-700 bg-[#1E1E1E] px-4 py-3 pr-10 text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-yellow-500/20"
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

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-400 cursor-pointer">
                <input type="checkbox" className="rounded border-gray-600 bg-transparent" />
                Remember Me
              </label>

              <Link to={ROUTES.FORGOTPASSWORD} className="text-[#D4AF37] transition hover:text-yellow-300 cursor-pointer">
                Forgot Password?
              </Link>
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
              {formik.isSubmitting ? "Signing in..." : "Sign In"}
            </button>

          </form>

          <div className="mt-4 text-center text-sm text-gray-300">
            Don't have an account?{' '}
            <button
              type="button"
              onClick={() => navigate(ROUTES.SIGNUP)}
              className="ml-2 font-semibold text-[#D4AF37] hover:text-yellow-300 cursor-pointer"
            >
              Create account
            </button>
          </div>

          <div className="mt-8 border-t border-gray-800 pt-5 text-center text-xs text-gray-500">
            © 2026 Salwa Trading. All Rights Reserved.
          </div>

        </div>

      </div>

    </div>
  );
};

export default Login;