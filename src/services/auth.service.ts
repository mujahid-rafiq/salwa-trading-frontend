
import type { LoginDto } from "../dto/login.dto";
import type { RegisterDto } from "../dto/register.dto";
import type { VerifyOtpDto } from "../dto/verify-otp.dto";
import type { ActivateAccountDto, ForgotPasswordDto, ResendActivationCodeDto, ResetPasswordDto } from "./AuthApi";
import AuthApi from "./AuthApi";

const authApi = new AuthApi();

export const login = async (data: LoginDto) => {
  return authApi.login(data);
};

export const register = async (data: RegisterDto) => {
  return authApi.register(data);
};

export const forgotPassword = async (data: ForgotPasswordDto) => {
  return authApi.forgotPassword(data);
};

export const verifyOtp = async (data: VerifyOtpDto) => {
  return authApi.verifyOtp(data);
};

export const activateAccount = async (data: ActivateAccountDto) => {
  return authApi.activateAccount(data);
};

export const resendActivationCode = async (data: ResendActivationCodeDto) => {
  return authApi.resendActivationCode(data);
};

export const resetPassword = async (data: ResetPasswordDto) => {
  return authApi.resetPassword(data);
};