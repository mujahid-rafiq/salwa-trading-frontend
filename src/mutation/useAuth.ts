import { useMutation, type UseMutationResult } from "@tanstack/react-query";
import type { RegisterDto } from "../dto/register.dto";
import AuthApi from "../services/AuthApi";
import type { LoginDto } from "../dto/login.dto";


type RegisterVariables = Omit<RegisterDto, "confirmPassword">;
type ForgotPasswordVariables = { email: string };
type VerifyOtpVariables = { email: string; otp: string; };
type ActivateAccountVariables = { email: string; otp: string; };
type ResetPasswordVariables = { email: string; otpCode: string; newPassword: string; confirmPassword: string; };

const authApi = new AuthApi();

export const useLoginMutation = (): UseMutationResult<unknown, unknown, LoginDto, unknown> => {
  return useMutation<unknown, unknown, LoginDto, unknown>({
    mutationFn: (data: LoginDto) => authApi.login(data),
  });
};

export const useRegisterMutation = (): UseMutationResult<unknown, unknown, RegisterVariables, unknown> => {
  return useMutation<unknown, unknown, RegisterVariables, unknown>({
    mutationFn: (data: RegisterVariables) => authApi.register(data),
  });
};

export const useForgotPasswordMutation = (): UseMutationResult<unknown, unknown, ForgotPasswordVariables, unknown> => {
  return useMutation<unknown, unknown, ForgotPasswordVariables, unknown>({
    mutationFn: (data: ForgotPasswordVariables) => authApi.forgotPassword(data),
  });
};

export const useVerifyOtpMutation = (): UseMutationResult<unknown, unknown, VerifyOtpVariables, unknown> => {
  return useMutation<unknown, unknown, VerifyOtpVariables, unknown>({
    mutationFn: (data: VerifyOtpVariables) => authApi.verifyOtp(data),
  });
};

export const useActivateAccountMutation = (): UseMutationResult<unknown, unknown, ActivateAccountVariables, unknown> => {
  return useMutation<unknown, unknown, ActivateAccountVariables, unknown>({
    mutationFn: (data: ActivateAccountVariables) => authApi.activateAccount(data),
  });
};

export const useResetPasswordMutation = (): UseMutationResult<unknown, unknown, ResetPasswordVariables, unknown> => {
  return useMutation<unknown, unknown, ResetPasswordVariables, unknown>({
    mutationFn: (data: ResetPasswordVariables) => authApi.resetPassword(data),
  });
};
