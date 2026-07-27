import AuthApi from "../api/AuthApi";
import type {
  LoginDto,
  RegisterDto,
  ForgotPasswordDto,
  VerifyOtpDto,
  ActivateAccountDto,
  ResendActivationCodeDto,
  ResetPasswordDto,
} from "../api/AuthApi";

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