import { useMutation, type UseMutationResult } from "@tanstack/react-query";
import {
  login as loginApi,
  register as registerApi,
  forgotPassword as forgotPasswordApi,
  verifyOtp as verifyOtpApi,
  activateAccount as activateAccountApi,
  resendActivationCode as resendActivationCodeApi,
  resetPassword as resetPasswordApi,
} from "../services/auth.service";
import type { LoginDto } from "../dto/login.dto";
import type { RegisterDto } from "../dto/register.dto";
import type { ForgotPasswordDto, VerifyOtpDto, ActivateAccountDto, ResendActivationCodeDto, ResetPasswordDto } from "../api/AuthApi";

type RegisterVariables = Omit<RegisterDto, "confirmPassword">;

export const useLoginMutation = (): UseMutationResult<unknown, unknown, LoginDto, unknown> => {
  return useMutation<unknown, unknown, LoginDto, unknown>({
    mutationFn: (data: LoginDto) => loginApi(data),
  });
};

export const useRegisterMutation = (): UseMutationResult<unknown, unknown, RegisterVariables, unknown> => {
  return useMutation<unknown, unknown, RegisterVariables, unknown>({
    mutationFn: (data: RegisterVariables) => registerApi(data),
  });
};

export const useForgotPasswordMutation = (): UseMutationResult<unknown, unknown, ForgotPasswordDto, unknown> => {
  return useMutation<unknown, unknown, ForgotPasswordDto, unknown>({
    mutationFn: (data: ForgotPasswordDto) => forgotPasswordApi(data),
  });
};

export const useVerifyOtpMutation = (): UseMutationResult<unknown, unknown, VerifyOtpDto, unknown> => {
  return useMutation<unknown, unknown, VerifyOtpDto, unknown>({
    mutationFn: (data: VerifyOtpDto) => verifyOtpApi(data),
  });
};

export const useActivateAccountMutation = (): UseMutationResult<unknown, unknown, ActivateAccountDto, unknown> => {
  return useMutation<unknown, unknown, ActivateAccountDto, unknown>({
    mutationFn: (data: ActivateAccountDto) => activateAccountApi(data),
  });
};

export const useResendActivationCodeMutation = (): UseMutationResult<unknown, unknown, ResendActivationCodeDto, unknown> => {
  return useMutation<unknown, unknown, ResendActivationCodeDto, unknown>({
    mutationFn: (data: ResendActivationCodeDto) => resendActivationCodeApi(data),
  });
};

export const useResetPasswordMutation = (): UseMutationResult<unknown, unknown, ResetPasswordDto, unknown> => {
  return useMutation<unknown, unknown, ResetPasswordDto, unknown>({
    mutationFn: (data: ResetPasswordDto) => resetPasswordApi(data),
  });
};
