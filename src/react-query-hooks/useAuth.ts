import { useMutation } from "@tanstack/react-query";
import { login as loginApi, register as registerApi } from "../services/auth.service";
import { LoginDto } from "../dto/login.dto";
import { RegisterDto } from "../dto/register.dto";

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: (data: LoginDto) => loginApi(data),
  });
};

export const useRegisterMutation = () => {
  return useMutation({
    mutationFn: (data: RegisterDto) => registerApi(data),
  });
};
