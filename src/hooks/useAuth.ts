import { useMutation, type UseMutationResult } from "@tanstack/react-query";
import { login as loginApi, register as registerApi } from "../services/auth.service";
import type { LoginDto } from "../dto/login.dto";
import type { RegisterDto } from "../dto/register.dto";

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
